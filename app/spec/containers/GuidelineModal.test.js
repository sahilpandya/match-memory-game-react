import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { GuidelineModal } from 'containers/GuidelineModal'

describe.only('Container::::GuidelineModal', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<GuidelineModal {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
