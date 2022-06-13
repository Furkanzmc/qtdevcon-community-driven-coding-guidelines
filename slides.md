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
- Welcome to the talk, thanks for joining.
- It's good to be here.
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
- Started using QML on mobile and desktop for a startup.
- Wrote the desktop client for EdBox.
- I build my own keyboards
- I love UI work and working with designers
- Alone developer.
- Now working at Autodesk at a massive project to rewrite the UI of one of our products completely
  in QML. Working with designers.
- Please interrupt and ask questions
- Can't share Alias because it's not out yet.
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

- Pool experience from vastly different industries
- Sane defaults for new comers to the language
- Base for tooling

<!--
- No need to convince anyone of this.
- Poll: How many C++, HTML developers?
- Unique situation for QML: New language, different paradigm.
- Desktop has very different limitations than embedded or mobile platforms.
- Right by default
-->

---

# Yet another guideline?..

![standards](https://imgs.xkcd.com/comics/standards.png)

> - [Official Best Practices for QML and Qt Quick from Qt](https://doc.qt.io/qt-6/qtquick-bestpractices.html)
> - [QML Best Practices Search](https://www.google.com/search?hl=en&q=qml+best+practices)

<!--
- Qt's documentation already has great content.
- Content from Nokia, Qt, and others...
- Scattered.
- Unique to QML: Embedded, web, desktop, mobile...
- Make it a more open conversation.
- Barrier to Qt is higher than GitHub.
- Started out with me writing down what I learn and solutions to my mistakes.
- First commit on April 30th, 2018
- Many different use cases, no common open source truth.
- Knowledge gathered from varies disciplines can help others.
-->

---

# Guidelines are NOT...

- Unchangeable
- The absolute truth
- Be all end all

<!--
- Change as you learn.
- Ignore when makes sense.
- No war. Discuss and adjust.
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
- Make things easy, not hard.
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

<!--
- Strong typing helps as well
-->

---

# How to Read QML Code

```qml {all|1-1|1-3|1-6|1-8|1-11|1-17|all}
// CircleMouseArea.qml
Item {
    id: root

    property int radius

    signal clicked(MouseEvent mouse)

    implicitWidth: 50
    implicitHeight: 50

    Rectangle {
        width: parent.width / 2
        height: height
        radius: root.radius
    }

    MouseArea {
        // If mouse click is inside the circle, emits root.clicked(mouse)
    }
}
```

<!--
- Gather information before you move down
- Interface first
- Easy to glace over
- Signals and properties show customization points and interactions
- Often, you are not interested in implementation details
- Makes it easier for designers.
- Reduce the barrier of entry
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
- QML is a visual language
- Should be easy to imagine the code
- Discuss with your team and adjust
- qmlformat doesn't support customization yet
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
- Glance and understand the basics, big picture
- As you read down, things make more and more sense
- Mitchell mentioned that Component is also an attached property so we should change this as well
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
- Position and geometry first
- Prioritize most essential properties of component
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
- Don't put functions in your interface
- Large functions hurt readibility
-->

---
layout: two-cols
---

# Bad - States and Transitions

```qml
RowLayout {

    Item {
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
- Eaiser to see what you are changing
- You read top to bottom, more familiarity
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
- Takes a while to get used to, but pays off
- Our designers can't understand code otherwise
- Structured > Unstructured
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

<!--
- Simple example to fit the slide
- What are the downsides?
-->

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

# Unnecessary Evaluations

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

# -

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
- Same applies to emitting signals
- Emit signals when something actually changes
- We have had cases where we emit signals willy nilly and it resulted in performance problems and
  binding loops.
-->

---
layout: section
---

# [C++ Integration](https://github.com/Furkanzmc/QML-Coding-Guide#c-integration)

<!--
Poll: How many different ways do you think we can expose a C++ object to QML?
-->

---

1. Context properties [Deprecated]
2. Global object
3. Singletons
4. Instantiated object

---

# Context Properties Are Deprecated

Don't use them.

[QTBUG-73064](https://bugreports.qt.io/browse/QTBUG-73064)

```qml
Item {
    id: root

    property int borderWidth

    Rectangle {
        // No no...
        border.width: borderWidth
    }
}
```

<!--
- This also applies to non-qualified access
-->

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
- Common API access like screen or other input functions
- One exception is for themes
- I find singleton data classes hard to deal with
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
- Reduce component dependency
- Promotes flexible and easy to use components
- Reasoning with global data is hard
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
- Increase flexibility and re-usability.
- Locally declared, created, destroyed
- Use singleton in C++, but expose it as an instantiated type
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
- Better re-usability
- Customization point, with singleton everything changes
-->

---

# Watch Out for Object Ownership Rules

Two ownership types:

- C++
- QML
- Expose data with properties only
> See [example](https://zmc.space/freeze-columns-with-qml-table-view.html) for using properties for
> data customization

> See [this article](https://embeddeduse.com/2018/04/02/qml-engine-deletes-c-objects-still-in-use/)
> for a real life example of a related bug in an application.

```cpp
Q_PROPERTY( QObject* colors READ colors )

QObject* colors(); // Ownership remains in C++.
Q_INVOKABLE QObject* myData(); // Ownership is transferred to QML.
```

<!--
- Shouldn't need to worry about this
- Always expose data with properties, not functions
- Data exposure with functions promotes imperative style
- Add more functions to slice data declaratively
-->

---
layout: section
---

# [Memory](https://github.com/Furkanzmc/QML-Coding-Guide#performance-and-memory)

Profile first!
Needs contributions.

<!--
- Not in a memory constrained environment.
- Existing ones will be removed
- If you are working on a memory constrained environment, do contribute!
-->

---
layout: section
---

# [Signals](https://github.com/Furkanzmc/QML-Coding-Guide#signal-handling)

Signals != Functions

<!--
This was one of the most obvious mistakes we made. Signals are signals, functions are functions.
They each have their own place. Don't confuse them.
- Had to chase signals and signal handlers all over
-->

---

# Functions vs Signals

Function -> Changes Internal State
> Imperative form -> doSomething()

Signal -> Announces Internal State Change
> Passive form -> somethingChanged()

<!--
Signals should be made private.
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
- Nefarious in delegates
- Model with millions of objects
- Hard to track down
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
- Signal is being used as a function
- We had this problem in the beginning
- Makes code hard to follow and less re-usable
-->

---

```qml
// ColorPicker.qml
Rectangle {
    id: root

    signal colorPicked(color pickedColor)

    ColorDialog {
        onColorChanged: {
            root.color = color
            root.colorPicked(color)
        }
    }
}

// main.qml
Window {
    ColorPicker {
        onColorPicked: {
            label.text = "Color Changed"
        }
    }
    Label { id: label }
}
```

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
layout: section
---

# [States and Transitions](https://github.com/Furkanzmc/QML-Coding-Guide#states-and-transitions)

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

# [Visual Items](https://github.com/Furkanzmc/QML-Coding-Guide#visual-items)

---

# One Size Does Not Fit All

- **Implicit Size**: Space occupied when no explicit size or anchors are set.
- **Explicit Size**: Space occupied when an external size is given, ie `width/height` or `anchors`
  are set.
- **Content Size**: Space occupied by the contents of a view.
- **Padding**: Space between the content item and the edge of a component.
- **Margin**: Space between two controls.
- **Inset**: Space between background and the edge of a component.

<img src="/qtquickcontrols2-control.png" class="h-65 rounded shadow" style="text-align: center" />

<!--
- Understand this!
- QtQuick Controls use it
- Not using it right will cause headaches
- Gives you the freedom to provide more customization
- Took a while for designers to understand
-->

---
layout: image-right
image: https://i.pinimg.com/originals/d9/eb/e2/d9ebe29636e1fac1e40b7a10da61bb7e.jpg
---

> ... our intellectual powers are rather geared to master **static relations** and that our powers
> to visualize **processes evolving in time** are relatively poorly developed. - Edsger W.
> Dijkstra, Go To Statement Considered Harmful

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

# [JavaScript](https://github.com/Furkanzmc/QML-Coding-Guide#javascript)

<!--
- Have as little JS as possible
- We have our own way of exposing C++ functions, would love to do a talk about that
- One less thing to learn
- Prefer C++ for logic
-->

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

# What's next?

- OUt with the old, in with the new
- More content for Qt 6
- An architecture section
- More contributions from others

> QML Coding Guidelines on GitHub - [https://github.com/Furkanzmc/QML-Coding-Guide](https://github.com/Furkanzmc/QML-Coding-Guide)

<!--
- Live document
- More support from community
- Had reviews from Mitch Curtis and a few other Qt developers
-->

---
layout: fact
---

# Thank You
