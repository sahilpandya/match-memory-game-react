import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { AmbassadorProgram } from 'containers/community/AmbassadorProgram'

describe.only('Container::Community::AmbassadorProgram', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<AmbassadorProgram {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
