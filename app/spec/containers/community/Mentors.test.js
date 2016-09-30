import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Mentors } from 'containers/community/Mentors'

describe.only('Container::Community::Mentors', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Mentors {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
