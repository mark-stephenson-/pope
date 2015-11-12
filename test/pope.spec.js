'use strict'

/**
 * pope
 * Copyright(c) 2015-2015 Harminder Virk
 * MIT Licensed
*/

const format = require('../src/index')
const pope = format.pope
const prop = format.prop
const chai = require('chai')
const expect = chai.expect

describe('pope', function   () {

  it('should fetch properties from a given object', function () {
    const name = prop({name:'virk'},'name')
    expect(name).to.equal('virk')
  })

  it('should fetch nested properties from a given object', function () {
    const name = prop({profile: {name:'virk'}},'profile.name')
    expect(name).to.equal('virk')
  })

  it('should fetch nested properties from a given object using array index', function () {
    const name = prop({users:['virk','nikk']},'users.1')
    expect(name).to.equal('nikk')
  })

  it('should parse a template and replace mustache like placeholders', function () {
    const template = pope("Hello {{name}}", {name:'virk'})
    expect(template).to.equal('Hello virk')
  })

  it('should parse a template and replace multiple mustache like placeholders', function () {
    const template = pope("Hello {{name}}, your age seems to be {{age}}", {name:'virk', age:22})
    expect(template).to.equal('Hello virk, your age seems to be 22')
  })

  it('should parse a template and ignore whitespaces inside placeholders', function () {
    const template = pope("Hello {{ name }}", {name:'virk'})
    expect(template).to.equal('Hello virk')
  })

  it('should skip placeholders when values are missing', function () {
    const template = pope("Hello {{ name }}")
    expect(template.trim()).to.equal('Hello')
  })

  it('should replace array values at root level', function () {
    const template = pope("Hello {{ 0 }}", ['virk'])
    expect(template.trim()).to.equal('Hello virk')
  })

  it('should not replace array keys', function () {
    const template = pope("Function {{splice}}",[])
    expect(template.trim()).to.equal('Function')
  })

  it('should work fine when there is nothing to replace', function () {
    const template = pope("Hello world")
    expect(template.trim()).to.equal('Hello world')
  })

})