import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Zeromm } from 'containers/about/Zeromm'

describe.only('Container::About::Zeromm', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Zeromm {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
