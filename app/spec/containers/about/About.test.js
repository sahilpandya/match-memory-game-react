import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { About } from 'containers/About'

describe.only('Container::::About', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<About {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
