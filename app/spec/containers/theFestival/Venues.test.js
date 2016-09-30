import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Venues } from 'containers/theFestival/Venues'

describe.only('Container::TheFestival::Venues', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Venues {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
