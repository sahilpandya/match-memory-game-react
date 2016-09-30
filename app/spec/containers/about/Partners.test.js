import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Partners } from 'containers/about/Partners'

describe.only('Container::About::Partners', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Partners {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
