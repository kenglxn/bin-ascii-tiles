define ['cs!src/coffee/app'], (App) ->
  describe 'App', ->

    it 'should be defined', ->
      App.should.be.defined

    it 'should convert text to binary ascii', ->
      app = new App
      ascii = app.convert 'foo'
      ascii.length.should.equal 24
      ascii.should.match /^[01]+$/g
      ascii.should.equal '011001100110111101101111'

    it 'should create stats from input', ->
      app = new App
      stats = app.stats '011001100110111101101111'
      console.log stats
      stats.should.have.property 'count'
      stats.count.should.equal 24
      stats.should.have.property 'zeros'
      stats.zeros.should.equal 8
      stats.should.have.property 'ones'
      stats.ones.should.equal 16
      stats.should.have.property 'ratio'
      stats.ratio.should.equal '1/2'


    it 'should reduce ratio', ->
      app = new App
      reduced = app.reduce 8, 16
      reduced.should.eql [1, 2]
