import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Community } from 'containers/community/Community'

describe.only('Container::Community::Community', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Community {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
