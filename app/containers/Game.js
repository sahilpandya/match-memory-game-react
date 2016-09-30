import React, { Component } from 'react';
import { connect } from 'react-redux';

let cols_flipped = 0;
let timer = '';
let tries = 0;
let successCountCol = 0;
let triesbonus = 0;
let timebonus = 0;
class Game extends Component {
  constructor(props){
    super(props);
    this.gameMatrixCol = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
    this.matrix_values=[];
    this.matrix_col_ids=[];
    this.matrixFlipCols=this.matrixFlipCols.bind(this);
    this.minute=0;
    this.second=60;
    this.count = 1;
    this.nextLevel = this.nextLevel.bind(this)
    this.firstLoad = this.firstLoad.bind(this)
    this.state = {
      'level':1,
      'status':false,
      'failed':false,
      'nrTries':0,
      'nrSuccessTries':0,
      'remainingTime':0,
      'refresh':false,
      'finalScore':0
    }
  }

  componentDidMount() {
    setTimeout(function () {
      $('#levelModal').modal('show');
    })
    this.shuffleArray(this.gameMatrixCol);
  }

  nextLevel() {
    clearInterval(timer);
    var self = this;
    var levelNextSq = self.count++;
    if(levelNextSq === 1) {
      self.setState({
        'level':levelNextSq+1
      });
    } else {
      self.setState({
        'level':levelNextSq
      });
    }
    $('levelModal').modal('show');
    var lengthItem = this.refs['matrixBoard'].children.length;
    for(var i=0; i<lengthItem;i++) {
        this.refs['matrixBoard'].children[i].textContent = '';
    }
    this.shuffleArray(this.gameMatrixCol);
    this.refs.seconds.textContent = '';
    this.refs.minute.textContent = '';
    this.getTimer();
  }

  firstLoad() {
    if(this.state.level === 1) {
      clearInterval(timer);
      this.getTimer();
      var lengthItem = this.refs['matrixBoard'].children.length;
      for(var i=0; i<lengthItem;i++) {
          this.refs['matrixBoard'].children[i].textContent = '';
      }
      this.shuffleArray(this.gameMatrixCol);
      this.setState({
        'refresh':true,
        'finalScore':0
      })
    } else {
      this.nextLevel();
    }
  }

  getTimer() {
    let sec = 60;
    function pad(val, type) {
        if(val === 0 && type === 'sec') {
          $('#levelModal').modal('show');
          return "0"
        } else {
          return val > 0 ? val : "0";
        }
    }
    let self = this;
    timer = setInterval(function () {
        self.refs.seconds.textContent = pad(parseInt(--sec), 'sec');
        self.refs.minute.textContent = pad(parseInt(sec / 60), 'min');
    }, 1000);
    setTimeout(function () {
        clearInterval(timer);
        if(self.state.level > 1 && !self.state.status) {
          var levelNextSq = self.count--;
          self.setState({
            'level':levelNextSq
          });
        }
        if(!self.state.status) {
          $('#levelModal').modal('show');
          self.setState({
            'failed':true
          })
        }
    }, 61000);
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  getMatrixBoard(){
    return this.gameMatrixCol.map((item, index) => {
      return(
        <div key={index} className="col col-md-3" data-item={item}
        ref={'col'+index} id={'col'+index} onClick={this.matrixFlipCols}></div>
      )
    })
  }

  matrixFlipCols(col) {
      var these = this;
    	if(col.currentTarget.textContent == "" && this.matrix_values.length < 2){
        tries++;
        if(tries === 1) {
          these.setState({
            nrTries:tries+1
          });
        } else {
          these.setState({
            nrTries:tries
          });
        }
        var val = col.currentTarget.getAttribute('data-item');
    		col.currentTarget.style.background = '#FFF';
    		col.currentTarget.textContent = val;
    		if(this.matrix_values.length == 0){
    			this.matrix_values.push(val);
    			this.matrix_col_ids.push(col.currentTarget.id);
    		} else if(this.matrix_values.length == 1){
    			this.matrix_values.push(val);
    			this.matrix_col_ids.push(col.currentTarget.id);
          var score = this.calcScore();
          this.setState({
            'finalScore':score
          })
          let self = this;
    			if(self.matrix_values[0] == self.matrix_values[1]){
            tries--;
            self.setState({
              'nrTries':tries
            });
            successCountCol++;
            self.setState({
              'nrSuccessTries':successCountCol
            })
    				cols_flipped += 2;
            self.matrix_values = [];
      			self.matrix_col_ids = [];
    				if(cols_flipped == self.gameMatrixCol.length){
              self.setState({
                'status':true
              });
              var currentTime = this.refs.seconds.textContent;
              self.setState({
                'remainingTime':currentTime
              })
              var status = true;
              var score = self.calcScore(status);
              self.setState({
                'finalScore':score
              })
              $('#successLevelModal').modal('show');
              cols_flipped = 0;
              clearInterval(timer);
    				}
    			} else {
    				function flip2Back(){
    				    var col_1 = self.refs[self.matrix_col_ids[0]];
    				    var col_2 = self.refs[self.matrix_col_ids[1]];
    				    col_1.style.background = 'rgba(255,255,255,0.7)';
          	    col_1.textContent = "";
    				    col_2.style.background = 'rgba(255,255,255,0.7)';
        	      col_2.textContent = "";
                self.matrix_values = [];
          			self.matrix_col_ids = [];
    				}
    				setTimeout(flip2Back, 700);
    			}
    		}
    	}
  }
  getTimerElement() {
    return(
      <div>
        <span id="minutes" ref="minute">{this.minute}</span>:<span id="seconds" ref="seconds">{this.second}</span>
      </div>
    )
  }

  calcScore(status){
    var tilesbonus = (this.state.nrSuccessTries) * 20; // 20 points for each successful match
    if(status && status !== undefined) {
      timebonus += (60 - parseInt(this.state.remainingTime)) * 8;  // 8 points for each remaining second bonus
      triesbonus += 40; // 5 bonus * 8 pairs on success
    }
    var triesDeduct = ((this.state.nrTries)/2) * 5;  // (deduct) 10 points for each try = 400 pts
    if (tilesbonus <0) { tilesbonus = 0; }
    if (timebonus <0 || timebonus === undefined) { timebonus = 0; }
    if (triesbonus <0) { triesbonus = 0; }
    return (tilesbonus) + (timebonus) + (triesbonus) - (triesDeduct);
  }

  getScore() {
    return(
      <div className="col-md-12">
        <div className="col-md-6">Score:{this.state.finalScore} </div>
        <div className="col-md-6">Level:{this.state.level}</div>
      </div>
    )
  }
  render() {
    return (
      <div>
      <div className="col-md-12 game-container">
        <h1 className="text-center">Match Game</h1>
        <div className="row">
          <div className="col-md-12" id="game-board">
            <div className="col-md-12 timer text-right">
              {this.getTimerElement()}
            </div>
            <div className="col-md-12" ref="matrixBoard">
            {this.getMatrixBoard()}
            </div>
            <div className="col-md-3 score-level">
              {this.getScore()}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" tabindex="-1" role="dialog" id="levelModal" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h2 className="modal-title text-center">Level {this.state.level}</h2>
              </div>
              <div className="modal-body text-center">
                {
                  this.state.failed ? <div>Incomplete, Try Again</div> :
                <div>
                  <p>You have 60 seconds to match 8 pairs.</p>
                  <p>There are 8 different tiles.</p>
                </div>
                }
              </div>
              <div className="modal-footer text-center">
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.firstLoad}>
                {this.state.failed ? 'Restart': 'Start'}</button>
              </div>
            </div>
          </div>
        </div>
      <div className="modal fade" tabindex="-1" role="dialog" id="successLevelModal" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h2 className="modal-title text-center">Level {this.state.level}</h2>
              </div>
              <div className="modal-body text-center">
                <p>Level Completed</p>
                <p>Your total score:{this.state.finalScore}</p>
              </div>
              <div className="modal-footer text-center">
                <button type="button" className="btn btn-default" onClick={this.nextLevel} data-dismiss="modal">
                Next Level</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Game);
