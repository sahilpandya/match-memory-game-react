import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Info } from 'containers/theFestival/Info'

describe.only('Container::TheFestival::Info', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Info {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
