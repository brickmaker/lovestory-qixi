const app = document.getElementById('main');

const typewriter = new Typewriter(app, {
    delay: 120,
    cursorClassName: 'Typewriter__cursor curser'
});

typewriter.typeText = function (str, cls) {
    this.typeString(`<span class="${cls}">${str}</span>`)
    return this
}

typewriter.newLine = function () {
    this.typeString('<br/>')
    return this
}

typewriter.pauseNewline = function () {
    this.pauseFor(700)
        .typeString('<br/>')
    return this
}

typewriter.tab = function (n = 1) {
    this.pasteString(`<span style="opacity:0">xxxx</span>`.repeat(n))
    return this
}

const classes = {
    comment: 'comment',
    keyword: 'keyword',
    variable: 'variable',
    operator: 'operator',
    string: 'string',
    field: 'field',
    method: 'method',
    class: 'class',
    error: 'error',
    success: 'success',
    blank: 'blank',
    number: 'number',
    text: 'text',
}

typewriter
    // .pauseFor(2000)
    .typeText('// This is a programmer\'s love story.', classes.comment)
    .pauseNewline()

    .pauseNewline()

    .typeText('const ', classes.keyword)
    .typeText('charon ', classes.variable)
    .typeText('= ', classes.operator)
    .typeText('new ', classes.keyword)
    .typeText('Person', classes.class)
    .typeText('(', classes.operator)
    .typeText('"dongdong"', classes.string)
    .typeText(');', classes.operator)
    .pauseNewline()

    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('girlFriend', classes.method)
    .typeText('();', classes.operator)
    .pauseNewline()

    .typeText('// Error: ObjectNotFound', classes.error)
    .pauseNewline()

    .pauseNewline()

    .typeText('const ', classes.keyword)
    .typeText('pluto ', classes.variable)
    .typeText('= ', classes.operator)
    .typeText('new ', classes.keyword)
    .typeText('Person', classes.class)
    .typeText('(', classes.operator)
    .typeText('"yixin"', classes.string)
    .typeText(');', classes.operator)
    .pauseNewline()

    .pauseNewline()

    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('addEventListener', classes.method)
    .typeText('(', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText('.', classes.operator)
    .typeText('appear', classes.field)
    .typeText(', ', classes.operator)
    .typeText('function', classes.keyword)
    .typeText('(', classes.operator)
    .typeText('event', classes.variable)
    .typeText(') ', classes.operator)
    .typeText('{', classes.operator)
    .pauseNewline()
    .tab(1)
    .typeText('// Once your appearance', classes.comment)
    .pauseNewline()
    .tab(1)
    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('crazyFor', classes.method)
    .typeText('(', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(');', classes.operator)
    .pauseNewline()
    .typeText('});', classes.operator)
    .pauseNewline()

    .pauseNewline()

    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('setGirlFriend ', classes.method)
    .typeText('= ', classes.operator)
    .typeText('function', classes.keyword)
    .typeText('(', classes.operator)
    .typeText('person', classes.variable)
    .typeText(') {', classes.operator)
    .pauseNewline()
    .tab(1)
    .typeText('if ', classes.keyword)
    .typeText('(', classes.operator)
    .typeText('person ', classes.variable)
    .typeText('=== ', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(') { ', classes.operator)
    .typeText('// check the right person', classes.comment)
    .pauseNewline()
    .tab(2)
    .typeText('do ', classes.keyword)
    .typeText('{', classes.operator)
    .pauseNewline()
    .tab(3)
    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('persuit', classes.method)
    .typeText('(', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(');', classes.operator)
    .pauseNewline()
    .tab(3)
    .typeText('if ', classes.keyword)
    .typeText('(', classes.operator)
    .typeText('together', classes.method)
    .typeText('(', classes.operator)
    .typeText('charon', classes.variable)
    .typeText(', ', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(')', classes.operator)
    .typeText(') ', classes.operator)
    .typeText('break', classes.keyword)
    .typeText(';', classes.operator)
    .pauseNewline()
    .tab(2)
    .typeText('} ', classes.operator)
    .typeText('while ', classes.keyword)
    .typeText('(', classes.operator)
    .typeText('true', classes.keyword)
    .typeText(');', classes.operator)
    .typeText(' // endless persuit', classes.comment)
    .pauseNewline()
    .pauseNewline()
    .tab(2)
    .typeText('this', classes.keyword)
    .typeText('.', classes.operator)
    .typeText('person', classes.variable)
    .typeText(' = ', classes.operator)
    .typeText('person', classes.variable)
    .typeText(';', classes.operator)
    .pauseNewline()
    .tab(2)
    .typeText('console', classes.variable)
    .typeText('.', classes.operator)
    .typeText('log', classes.method)
    .typeText('(', classes.operator)
    .typeText('"// Congratulation, lucky guy!"', classes.string)
    .typeText(');', classes.operator)
    .pauseNewline()
    .tab(2)
    .typeText('return ', classes.keyword)
    .typeText('this', classes.keyword)
    .typeText(';', classes.operator)
    .pauseNewline()
    .tab(1)
    .typeText('}', classes.operator)
    .pauseNewline()
    .typeText('}', classes.operator)
    .pauseNewline()

    .pauseNewline()

    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('addEventListener', classes.method)
    .typeText('(', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText('.', classes.operator)
    .typeText('seperate', classes.field)
    .typeText(', ', classes.operator)
    .typeText('function', classes.keyword)
    .typeText('(', classes.operator)
    .typeText('event', classes.variable)
    .typeText(') ', classes.operator)
    .typeText('{', classes.operator)
    .pauseNewline()
    .tab(1)
    .typeText('setInterval', classes.method)
    .typeText('(', classes.operator)
    .typeText('function', classes.keyword)
    .typeText('() {', classes.operator)
    .pauseNewline()
    .tab(2)
    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('miss', classes.method)
    .typeText('(', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(');', classes.operator)
    .pauseNewline()
    .tab(1)
    .typeText('}, ', classes.operator)
    .typeText('1000', classes.number)
    .typeText(' * ', classes.operator)
    .typeText('3600', classes.number)
    .pauseFor(500)
    .deleteChars(4)
    .typeText('60', classes.number)
    .pauseFor(500)
    .deleteChars(2)
    .typeText('1', classes.number)
    .pauseFor(500)
    .deleteChars(9)
    .typeText('1', classes.number)
    .typeText(');', classes.operator)
    .typeText(' // miss you every millisecond', classes.comment)
    .pauseNewline()
    .typeText('});', classes.operator)
    .pauseNewline()

    .pauseNewline()

    .typeText('const ', classes.keyword)
    .typeText('promise ', classes.variable)
    .typeText('= ', classes.operator)
    .typeText('new ', classes.keyword)
    .typeText('Promise', classes.class)
    .typeText('(', classes.operator)
    .typeText('makeCommitment', classes.method)
    .typeText('(', classes.operator)
    .typeText('charon', classes.variable)
    .typeText(', ', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(')', classes.operator)
    .typeText(')', classes.operator)
    .pauseNewline()
    .tab()
    .typeText('.', classes.operator)
    .typeText('then', classes.method)
    .typeText('(', classes.operator)
    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('getMarriedTo', classes.method)
    .typeText('(', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(')', classes.operator)
    .typeText(')', classes.operator)
    .pauseNewline()
    .tab()
    .typeText('.', classes.operator)
    .typeText('then', classes.method)
    .typeText('(', classes.operator)
    .typeText('charon', classes.variable)
    .typeText('.', classes.operator)
    .typeText('liveHappilyWith', classes.method)
    .typeText('(', classes.operator)
    .typeText('pluto', classes.variable)
    .typeText(')', classes.operator)
    .typeText(');', classes.operator)
    .pauseNewline()

    .pauseNewline()

    .typeText('// The story is never ending...', classes.comment)

    .pauseNewline()
    
    .pauseNewline()

    .pauseFor(500)
    .typeText('Finally,', classes.text)
    .pauseFor(500)
    .typeText(' honey,', classes.text)
    .pauseFor(500)
    .typeText(' HAPPY QIXI FESTIVAL!', classes.text)

    .start();