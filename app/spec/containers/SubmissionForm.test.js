import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { SubmissionForm } from 'containers/SubmissionForm'

describe.only('Container::::SubmissionForm', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<SubmissionForm {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
