import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Team } from 'containers/about/Team'

describe.only('Container::About::Team', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Team {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
