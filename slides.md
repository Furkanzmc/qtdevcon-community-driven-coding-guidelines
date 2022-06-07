---
# try also 'default' to start simple
theme: seriph
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

Living and breathing document with the communitye

<!--
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
image: https://unsplash.com/photos/NL_DF0Klepc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU0NDYyNzI0&force=true&w=640
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

```cpp
qmlRegisterSingletonType<MySingletonClass>("MyNameSpace", 1, 0, "MySingletonClass",
                                           MySingletonClass::singletonProvider);
```

```qml
Window {
    onClosing: (event) => {
        event.accepted = MySingletonClass.confirmExit()
    }
}
```

Singletons are good for themes as well.

```qml
Button {
    background: Rectangle {
        color: Theme.buttonBackground
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
-->

---

# Prefer Instantiated Types Over Singletons For Data

```cpp
qmlRegisterType<ColorModel>("MyNameSpace", 1, 0, "ColorModel");
```

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

```qml
// ColorsWindow.qml
Window {
    id: root

    property alias model: rp.model

    Column {
        Repeater {
            id: rp
            // Alternatively
            model: PaletteColorsModel { }
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

See [#2](https://github.com/Furkanzmc/QML-Coding-Guide/issues/9) for related discussions.

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
-->
