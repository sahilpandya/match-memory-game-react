import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Blog } from 'containers/Blog'

describe.only('Container::::Blog', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Blog {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
