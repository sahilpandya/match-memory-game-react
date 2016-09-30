import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Footer } from 'containers/Footer'

describe.only('Container::::Footer', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Footer {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
