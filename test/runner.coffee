define ['require', 'jam/chai/chai'], (require, chai) ->
  (tests) ->
    chai.should()
    mocha.setup('bdd')

    require tests, ->
      mocha.run()