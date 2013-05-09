define ['underscore', 'jquery'], (_, $) ->
  class App
    init: =>
      main = $("#main")
      input = $("#input")
      stats = $("#stats")
      input.keyup =>
        val = @convert(input.val())
        main.html('')
        for v in val
          main.append("<span class='#{if v is '0' then "light" else "dark"}'></span>")
        stats.text(JSON.stringify(@stats(val), null, 2))

    convert: (input) ->
      output = ''
      for char in input
        bin = char.charCodeAt(0).toString(2)
        output += "00000000#{bin}".substring(char.charCodeAt(0).toString(2).length)
      output

    stats: (val) =>
      stats = _.countBy val, (v) =>
        if v is '0' then "zeros" else "ones"
      _.extend stats,
        count: val.length
        ratio: @reduce(stats.zeros, stats.ones).join('/')

    reduce: (num, denom) =>
      gcdFn = (a,b) ->
        if b then gcdFn(b, a % b) else a
      gcd = gcdFn num, denom
      [num / gcd, denom / gcd]



