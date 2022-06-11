---
# try also 'default' to start simple
theme: seriph
download: true
number: true
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: prism
# show line numbers in code blocks
lineNumbers: false
# persist drawings in exports and build
drawings:
  persist: false
themeConfig:
  primary: '#485a62'
background: https://unsplash.com/photos/cAtzHUz7Z8g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNvbW11bml0eSUyMHdvcmt8ZW58MHx8fHwxNjU0NDY3MTQ3&force=true&w=2400
---

<style>
.slidev-code {
    height: 90%;
    overflow-y: scroll;
}
</style>

# Community Driven Coding Guidelines for QML

<!--
- Wrote the desktop client for EdBox.
- Started using QML on mobile and desktop for a startup.
- Alone developer.
- Started writing down the things I learned.
- Turned into its current state.
- Now working at Autodesk at a massive project to rewrite the UI of one of our products completely
  in QML. Working with designers.
- Updated as we go along.
-->

---

# Furkan Uzumcu

- Started using QML in 2017
- ❤️ Open Source
- ❤️ [Split] Mechanical Keyboards
- Working at Autodesk
- Furkanzmc @ GitHub
- Furkanzmc @ Twitter
- Website: https://zmc.space

<!--
- Worked on mobile and desktop applications with QML
- I build my own keyboards
- I love UI work and working with designers
- Please interrupt and ask questions
-->

---

<img src="/cuz.png" class="m-0 h-100 rounded shadow" style="float: left" />

<img src="/kursbudur.png" class="m-0 h-100 rounded shadow" style="float: right" />

---

<img src="/mantar.png" class="m-0 h-100 rounded shadow" style="float: left; margin-left: 5em" />

<img src="/ekinoks.gif" class="m-0 h-100 rounded shadow" style="float: right; margin-right: 6em" />

---

<img src="/edbox_1.png" class="m-0 h-100 rounded shadow" style="float: left" />

<img src="/edbox_2.png" class="m-0 h-100 rounded shadow" style="float: right" />

---
layout: image-left
image: https://unsplash.com/photos/ioYwosPYC0U/download?force=true&w=640
---

# Why have guidelines?

- Different use cases for QML in vastly different industries
- Sane defaults for new comers to the language[^1]
- Great existing content but scattered and unstructured[^2]
- Base for tooling

[^1]: [Official Best Practices for QML and Qt Quick from Qt](https://doc.qt.io/qt-6/qtquick-bestpractices.html)
[^2]: [QML Best Practices Search](https://www.google.com/search?hl=en&q=qml+best+practices)

<!--
- Started out with me writing down what I learn and solutions to my mistakes.
- No need to convince anyone of this.
- Qt's documentation already has great content.
- QML has very many different use cases in different industries. No known source of good community
  knowledge repository.
- Knowledge gathered from varies disciplines can help others.
- If you search for QML best practices, you'll come across many great talks and some blog posts.
  But they are scattered, information is duplicated.
-->

---
layout: center
---

# Guidelines are NOT...

- Unchangeable
- The absolute truth
- Be all end all

<!--
- Guidelines change as new experience is gained.
- Whenever it makes sense, you can bypass them.
- No need to wage war with your colleagues over it. Discuss and adjust.
-->

---

# Guidelines are for...

- Making code easier to:
    + read
    + understand
    + maintain
- Making it easier to detect errors or pitfalls
- Making it easier to extract conventions for new comers.

<!--
It's all about making things easier for people to read, write and understand code.
-->

---
layout: image-right
image: https://unsplash.com/photos/NL_DF0Klepc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU0NDYyNzI0&force=true&w=1080
---

# Better Tooling

- Better diagnostics
- Early error detection
- Enforcing best practices and deprecation warnings
- Better integration into development cycle (e.g git hooks, CI)
- Customization

<!--
- Qt Creator provides good interface to some of the tools. But it forces one to use Qt Creator.
  Most of our developers don't.
- It's not immediately clear for people, especially beginners, where the error is and why it's
  there.
- Written guidelines are great, but it's not viable to expect a developer to check the guidelines
  every time.
- We adopted a coding style for QML that's incompatible with qmlformat, it's not feasible for us to
  change now.
-->

---

# Related Work

- [QTBUG-68406](https://bugreports.qt.io/browse/QTBUG-68406): Create Language Server for QML
- [QTBUG-74839](https://bugreports.qt.io/browse/QTBUG-74839): Implement QML code model in Qt
- [QTBUG-74840](https://bugreports.qt.io/browse/QTBUG-74840): Implement QmlDom in Qt
- [QTBUG-73675](https://bugreports.qt.io/browse/QTBUG-73675): Streamline QML for better toolability and performance
- [QML: Tooling](https://bugreports.qt.io/browse/QTBUG-101531?jql=project%20%3D%20QTBUG%20AND%20component%20%3D%20%22QML%3A%20Tooling%22)
- [QTBUG-69097](https://bugreports.qt.io/browse/QTBUG-69097)

---

# How to Read QML Code

```qml {all|1-2|4-6|6-7|8-10|11-18|20-22|all}
Item {
    id: root

    property int radius
    property color borderColor

    signal clicked(MouseEvent mouse)

    implicitWidth: 50
    implicitHeight: 50

    Rectangle {
        width: parent.width / 2
        height: height
        radius: root.radius
        border.width: 1
        border.color: root.borderColor
    }

    MouseArea {
        // If mouse click is inside the circle, emits root.clicked(mouse)
    }
}
```

<!--
The goal is to gather as much background information as possible before you jump into the
implementation details of a component.

When you see the top level type, you already gain some insight. You know what kind of properties
and signals that the type has if it's a built-in type. If it's not, then you just need to jump to
the file, take a quick glance at the top and understand the basics of it.

Then we get to the part that customizes this component further with additional properties and
signals. Now I have a better understanding of the interactions that this component has.

Then comes the visual children that might depend on the properties we declared above or the
inherited properties.

This helps us especially when we have designers working on the codebase. It makes it easier for
them to read and understand code.
-->

---
layout: section
---

# [Code Style](https://github.com/Furkanzmc/QML-Coding-Guide#code-style)

---

# Code Order

- id
- Property declarations
- Signal declarations
- Property initializations
- Attached properties and signal handlers
- States
- Transitions
- Signal handlers
- Child objects
  + Visual Items
  + Qt provided non-visual items
  + Custom non-visual items
- `QtObject` for encapsulating private members[[1]](https://bugreports.qt.io/browse/QTBUG-11984)
- JavaScript functions

<!--
- Each title will have a link to the associated section on GitHub.

QML is a visual language. When you look at a code, it should be easy to imagine what it would look
like at runtime. This is not for replacing hot reloading, but making editing and understanding
easier.

Discuss in your team, decide on a style and stick to it. We stuck to this, qmlformat does something
completely different.
-->

---
layout: two-cols
---

# Bad - ID, Properties, and Signals

```qml
// CustomMouseArea.qml
MouseArea {
    Component.onCompleted: { }
    onTripleClicked: { }
    onClicked: { }
    pressAndHoldInterval: 20

    signal tripleClicked()
    property point pressedPosition

    id: root
}
```

::right::

# Good - ID, Properties, and Signals

```qml
// CustomMouseArea.qml
MouseArea {
    id: root

    property point pressedPosition
    signal tripleClicked()

    pressAndHoldInterval: 20
    onClicked: { }
    onTripleClicked: { }
    Component.onCompleted: { }
    Component.onDestruction: { }
}
```

<!--
When you look at the code, it should be easy to get a big picture idea of the properties and
signals this document provides so the code you read down below makes more sense.

Mitchell mentioned that Component is also an attached property so we should change this as well.
-->

---
layout: two-cols
---

# Bad - ID, Properties, and Signals

```qml
Item {
    Item {
        anchors.left: parent.left
        z: 32
        x: 23
        y: 32
        implicitWidth: 300
        width: 300
        id: root
    }
}
```

::right::

# Good - ID, Properties, and Signals

```qml
Item {
    Item {
        id: root
        x: 23
        y: 32
        z: 32
        implicitWidth: 300
        width: 300
        anchors.left: parent.left
    }
}
```

<!--
Note that we wouldn't be setting anchors and explicit size and position here if this is meant to be
a component.
Geometry information is often the thing that we change the most and it affects our understanding of
the component.
-->

---
layout: two-cols
---

# Bad - Function Ordering

```qml
Item {
    id: root

    function someFunction() { }

    someProperty: true
}
```

::right::

# Good - Function Ordering

```qml
Item {
    id: root
    someProperty: true

    // Function are declared at the bottom of the document.
    function someFunction() { }
}
```

<!--
The reason that functions are at the bottom is first you should not be adding functions to your
components, and second in case the functions end up getting larger they hurt readability.

In our code base, we have a way of creating function objects that call our C++ functions. We rarely
add JS functions.
-->

---
layout: two-cols
---

# Bad - States and Transitions

```qml
RowLayout {

    Item {
        id: root
        states: [ State { } ]
        transitions: [ Transitions { } ]
        width: 300
        Layout.fillHeight: true
        enabled: true
        layer.enabled: false
    }
}
```

::right::

# Good - States and Transitions

```qml
RowLayout {

    Item {
        id: root
        width: 300
        enabled: true
        layer.enabled: false
        Layout.fillHeight: true
        states: [ State { } ]
        transitions: [ Transitions { } ]
    }
}
```

<!--
Easier to see what you are transitioning when the states are above the transitions.
Easier to see what properties will be changing in the states if we can see the properties above.
As you read the code going down, you are already familiar with the properties that the states would
be editing. Makes it easier to reason with code.
-->

---

# Full Example

```qml
// First Qt imports
import QtQuick 2.15
import QtQuick.Controls 2.15
// Then custom imports
import my.library 1.0

Item {
    id: root

    // ----- Property Declarations

    // Required properties should be at the top.
    required property int radius: 0

    property int radius: 0
    property color borderColor: "blue"

    // ----- Signal declarations

    signal clicked()
    signal doubleClicked()

    // ----- In this section, we group the size and position information together.

    x: 0
    y: 0
    z: 0
    width: 100
    height: 100
    anchors.top: parent.top // If a single assignment, dot notation can be used.
    // If the item is an image, sourceSize is also set here.
    // sourceSize: Qt.size(12, 12)

    // ----- Then comes the other properties. There's no predefined order to these.

    // Do not use empty lines to separate the assignments. Empty lines are reserved
    // for separating type declarations.
    enabled: true
    layer.enabled: true

    // ----- Then attached properties and attached signal handlers.

    Layout.fillWidth: true
    Drag.active: false
    Drag.onActiveChanged: { }

    // ----- States and transitions.

    states: [ State { } ]
    transitions: [ Transitions { } ]

    // ----- Signal handlers

    onWidthChanged: { } // Always use curly braces.
    // onCompleted and onDestruction signal handlers are always the last in
    // the order.
    Component.onCompleted: { }
    Component.onDestruction: { }

    // ----- Visual children.

    Rectangle {
        height: 50
        anchors: { // For multiple assignments, use group notation.
            top: parent.top
            left: parent.left
            right: parent.right
        }
        color: "red"
        layer.enabled: true
    }

    // ----- Qt provided non-visual children

    Timer { }

    // ----- Custom non-visual children

    MyCustomNonVisualType { }

    QtObject {
        id: privates

        property int diameter: 0
    }

    // ----- JavaScript functions

    function collapse() { }

    function setCollapsed(value: bool) { }
}
```

<!--
It takes a while for people to get used to it, but it pays in the long run. We are at a stage where
our designers have gotten so used to reading code in a structured way, when the code doesn't follow
the guidelines they actually have trouble understanding the code. Declarative programming is fairly
new to our team and it takes a while for people to ramp up.
-->

---
layout: section
---

# [Bindings](https://github.com/Furkanzmc/QML-Coding-Guide#bindings)

Declarative > Imperative

---
layout: two-cols
---

# Imperative

```qml
ListView {
    model: ContactModel { }
    delegate: Label {
        required property int index
        required property string name

        Component.onCompleted: {
            text = index + ". " + name
        }
    }
}
```

::right::

# Declarative

```qml
ListView {
    model: ContactModel { }
    delegate: Label {
        required property int index
        required property string name

        text: index + ". " + name
    }
}
```

---

# Declarative 2

**Is this still declarative?**

```qml
ListView {
    model: ContactModel { }
    delegate: Label {
        required property int index
        required property string name

        text: getText()

        function getText(): string {
            return index + ". " + name
        }
    }
}
```

<!--
QML is a declarative language, use it as such.
-->

---
layout: two-cols
---

# Avoid Unnecessary Binding Evaluations

```qml
import QtQuick 2.3

Item {
    id: root

    property int accumulatedValue: 0

    Component.onCompleted: {
        const someData = [1, 2, 3, 4, 5, 20]
        for (let i = 0; i < someData.length; ++i) {
            accumulatedValue = accumulatedValue + someData[i]
        }
    }

    Text {
        text: root.accumulatedValue.toString()
        onTextChanged: console.log("text binding re-evaluated")
    }
}
```

::right::

# Avoid Unnecessary Binding Evaluations

```qml
import QtQuick 2.3

Item {
    id: root

    property int accumulatedValue: 0

    Component.onCompleted: {
        const someData = [1, 2, 3, 4, 5, 20]
        let temp = accumulatedValue
        for (let i = 0; i < someData.length; ++i) {
            temp = temp + someData[i]
        }

        accumulatedValue = temp
    }

    Text {
        text: root.accumulatedValue.toString()
        onTextChanged: console.log("text binding re-evaluated")
    }
}
```

<!--
This also applies to emitting signals. Signals should be emitted when there is an actual change.
We have had cases where we emit signals willy nilly and it resulted in performance problems and
binding loops. Menu is a prime example. Or a `modified()` method call.
-->

---
layout: section
---

# C++ Integration

<!--
Ask the audience: How many different ways do you think we can expose a C++ object to QML?
1- Context properties [Deprecated]
2- Global object
3- Singletons
4- Instantiated object
-->

---

# Context Properties Are Deprecated

Don't use them.

[QTBUG-73064](https://bugreports.qt.io/browse/QTBUG-73064)

---

# Singletons for API Access

```qml
Window {
    onClosing: (event) => {
        event.accepted = MySingletonClass.confirmExit()
    }

    Button {
        background: Rectangle {
            color: Theme.buttonBackground
        }
    }
}
```

<!---
If you can't fit these functionality into an instantiated class, then singletons are a good place
to put together some common functions. Normally, I would prefer instantiated types for data, but
for themes singletons are good.
-->

---

# Singletons for API Access (Continued)

- If you use singleton for data, don't use it inside a component.

```qml
// Contacts.qml
Item {
    id: root

    ListView {
        model: MySingletonClass.contacts
        delegate: Text { /* ... */ }
    }
}
```

```qml
// Contacts.qml
Item {
    id: root

    property alias model: lv.model

    ListView {
        id: lv
        delegate: Text { /* ... */ }
    }
}
```

<!--
The more you reduce the dependency that a component has, the better. It makes your components more
flexible and easy to use.

Reasoning with global data is hard. When it's declared locally, it's less cognitive load on the
reader. We have awQuick::Document, and it ends up being a bloated class with lots of members. Hard
to understand, reason with. But we only ever access this in a single place.
-->

---

# Prefer Instantiated Types Over Singletons For Data

```qml
// ColorsWindow.qml
Window {
    id: root

    Column {
        Repeater {
            model: Palette.selectedColors
            delegate: ColorViewer {
                required property color color
                required property string colorName

                selectedColor: color
                selectedColorName: colorName
            }
        }
    }
}
```

<!--
The goal is to increase flexibility and re-usability.
-->

---

# Prefer Instantiated Types Over Singletons For Data

See [Issue #2](https://github.com/Furkanzmc/QML-Coding-Guide/issues/9) for related discussions.

```qml
// ColorsWindow.qml
Window {
    property alias model: rp.model

    Column {
        Repeater {
            id: rp
            model: PaletteColorsModel { } // Alternatively
            delegate: ColorViewer {
                required property color color
                required property string colorName

                selectedColor: color
                selectedColorName: colorName
            }
        }
    }
}
```

<!--
The reason I like this approach is it allows for maximum reusablity of this component. I can use
PaletteColorsModel as a customization point internally by exposing properties. I can easily change
data based on the type of colors I want to show.
-->

---

# Watch Out for Object Ownership Rules

Two ownership types:

- C++
- QML

```cpp
Q_PROPERTY( QObject* colors READ colors )

QObject* colors(); // Ownership remains in C++.
Q_INVOKABLE QObject* myData(); // Ownership is transferred to QML.
```

See [this article](https://embeddeduse.com/2018/04/02/qml-engine-deletes-c-objects-still-in-use/)
for a real life example of a related bug in an application.

<!--
Honestly, if you worry about this then you may be doing something wrong. Keep things simple when it
comes to memory management, and the best way to do that is to just stick to instantiated types and
avoid calling any `get` functions from the QML side.

awQuick::Menu is also another example for this. We were returning QObjects from methods, and it
resulted in one of our editors crashing and it was hard to track down. So, do yourself a favor and
don't call methods in QML. Rely on signals or property change signals.
-->

---
layout: section
---

# Memory

Profile first!
Needs contributions.

<!--
Not in a memory constrained environment. So not a problem for us.
I had one section about implicit types in the guideline but it is not that practical and will
likely be removed. If you are working on a memory constrained environment, do contribute!
-->

---
layout: section
---

# Signals

<!--
This was one of the most obvious mistakes we made. Signals are signals, functions are functions.
They each have their own place. Don't confuse them.
-->

---

# Avoid Using `.connect()` in QML

```qml
ApplicationWindow {
    id: root

    property list<QtObject> myObjects: [
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() }
    ]

    ListView {
        cacheBuffer: 1 // Low enough we can resize the window to destroy buttons.
        model: root.myObjects.length
        delegate: Button {
            text: "Button " + index
            onClicked: root.myObjects[index].somethingHappened()
            Component.onCompleted: root.myObjects[index].somethingHappened.connect(() => console.log(text))
            Component.onDestruction: console.log("Destroyed #", index)
        }
    }
}
```

---

# Avoid Using `.connect()` in QML (Continued)

```qml
ApplicationWindow {
    id: root

    property list<QtObject> myObjects: [
        // ... Same model as previous code snippet
    ]

    ListView {
        cacheBuffer: 1 // Low enough we can resize the window to destroy buttons.
        model: root.myObjects.length
        delegate: Button {
            id: dlg
            text: "Button " + index
            onClicked: root.myObjects[index].somethingHappened()
            Component.onDestruction: console.log("Destroyed #", index)

            Connections {
                target: root.myObjects[index]

                function onSomethingHappened() {
                    console.log(dlg.text)
                }
            }
        }
    }
}
```

<!--
This is especially neferious in delegates. We have models that have millions and millions of
objects inside. If these signals get duplicated somehow, or we run into similar issue here, then
application can get stable and it may be hard to track.
-->

---

# Functions vs Signals

Function -> Changes Internal State
> Imperative form -> doSomething()

Signal -> Announces Internal State Change
> Passive form -> somethingHappened()

<!--
Signals should be made private.
-->

---

# What is wrong here?

```qml
// ColorPicker.qml
Rectangle {
    id: root

    signal colorPicked(color pickedColor)

    ColorDialog {
        onColorChanged: {
            root.colorPicked(color)
        }
    }
}

// main.qml
Window {
    ColorPicker {
        onColorPicked: {
            color = pickedColor
            label.text = "Color Changed"
        }
    }
    Label { id: label }
}
```

<!--
What is wrong with this code? These examples are trivial, but in a non-trivial application, the
consequences of these might end up costing you.

One problem we had in the beginning of our development was that signals were used as functions with
many indirections. It made code very hard to follow and made it exceedingly dynamic.
-->

---
layout: fact
---

Rule of thumb:

    When communicating up, use signals.
    When communicating down, use functions.

<!--
Since we are working with designers, we only use functions and signals in parts of the code that is
meant primarily for developers.
-->

---

# Use arrow function syntax for signal handlers

```qml
MouseArea {
    // Good!
    onClicked: (mouse) => {

    }
    // Bad...
    onClicked: {

    }
}
```

---
layout: image-right
image: https://i.pinimg.com/originals/d9/eb/e2/d9ebe29636e1fac1e40b7a10da61bb7e.jpg
---

> ... our intellectual powers are rather geared to master static relations and that our powers to
> visualize processes evolving in time are relatively poorly developed. - Edsger W. Dijkstra, Go To
> Statement Considered Harmful

<!--
Profound statement. Signals makes your application more dynamic and you have to jump from one place
to the other. Bindings are usually a better alternative to using signals. If you have to declare
signals, first ask yourself if there is a way you can express this as a property. With a property,
the relationship will be established and will be easier for you to reason with. With signals,
anybody could abuse it and use it elsewhere.
-->

---
layout: section
---

# JavaScript

---

```javascript
// Arrow function
root.value = Qt.binding(() => root.someOtherValue)
// The old way.
root.value = Qt.binding(function() { return root.someOtherValue })

// Variables
const value = 32;
let valueTwo = 42;
{
    // Valid assignment since we are in a different scope.
    const value = 32;
    let valueTwo = 42;
}
const value = 32;
value = 42; // ERROR!
```

<!--
Ideally, you should have as little JavaScript as possible. This is in part JS is slow for heavy
operations, but mostly to reduce friction for the readers of your code base. For newcomers, QML is
already new and now they have to learn JS... They probably heard nothing but bad news about JS so
no need to force it on them. Prefer C++ objects as singletons or as global object to add functions,
e.g Qt or Aw object.
-->

---
layout: section
---

# States and Transitions

---

# Don't Define Top Level States

```qml
Item {
    component Rect: Rectangle {
        id: self

        readonly property alias pressed: ma.containsPress

        states: State {
            when: ma.containsMouse

            PropertyChanges { target: self; color: "red" }
        }

        MouseArea { id: ma; hoverEnabled: true }
    }

    Rect {
        id: rect
        states: State {
            when: rect.pressed

            PropertyChanges { target: rect; color: "yellow" }
        }
    }
}
```

<!--
QQmlListProperty does not reset but append to itself.
-->

---
layout: section
---

# Visual Items

---

# Implicit size, explicit size, content size, padding, margin, inset...

- **Implicit Size**: Space occupied when no explicit size or anchors are set.
- **Explicit Size**: Space occupied when an external size is given, ie `width/height` or `anchors`
  are set.
- **Content Size**: Space occupied by the contents of a view.
- **Padding**: Space between the content item and the edge of a component.
- **Margin**: Space between two controls.
- **Inset**: Space between background and the edge of a component.

<!--
It's very important to get this concept right. QtQuick Controls are built on these ideas, and not
getting it right will cause headaches in the future. It's best to control the size of your items by
manipulating these, or some base values.

Content size determines if a view can be scrolled or not. Not that clear, took a long time for
designers to understand.
-->

---

<img src="/qtquickcontrols2-control.png" class="h-100 rounded shadow" style="text-align: center" />

---

# What's next?

- Clean up of the old
- More content for Qt 6
- An architecture section

<!--
Since this is supposed to be a live document, it'll get updated as we learn new things. What I want
next is some more support from the community. I had reviews from some Qt developers but it needs to
go beyond that.
-->

---
layout: fact
---

Thank You
