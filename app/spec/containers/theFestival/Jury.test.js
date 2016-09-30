import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Jury } from 'containers/theFestival/Jury'

describe.only('Container::TheFestival::Jury', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Jury {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
