import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Header } from 'containers/Header'

describe.only('Container::::Header', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Header {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
