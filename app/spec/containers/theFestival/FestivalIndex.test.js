import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { FestivalIndex } from 'containers/theFestival/FestivalIndex'

describe.only('Container::TheFestival::FestivalIndex', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<FestivalIndex {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
