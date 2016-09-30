import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Events } from 'containers/community/Events'

describe.only('Container::Community::Events', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Events {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
