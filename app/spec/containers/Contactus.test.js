import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Container, { Contactus } from 'containers/Contactus'

describe.only('Container::::Contactus', function(){
  let props

  function renderDoc () {
    return TestUtils.renderIntoDocument(<Contactus {...props}/>)
  }
  beforeEach(function(){
    props = {
    }
  })

  it('can be rendered', function(){
    let doc = renderDoc()
  })

})
