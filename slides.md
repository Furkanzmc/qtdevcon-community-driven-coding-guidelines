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
- Started 2017, mobile, desktop
- I build my own keyboards
- Now working at Autodesk with awesome designers and developers
- I love UI work and working with designers
- Please interrupt and ask questions
- Can't share Alias because it's not out yet.
-->

---
layout: image-left
image: https://unsplash.com/photos/ioYwosPYC0U/download?force=true&w=640
---

# Why have guidelines?

- Pool experience from vastly different industries
- Sane defaults for new comers to the language
- Base for tooling

<!--
- Go over slide first
- Poll: How many QML devs, how many started out as C++, how many as HTML developers?
- Poll: How many embeded, desktop, web?
- Unique situation for QML: New language, different paradigm.
-->

---

# Yet another guideline?..

![standards](https://imgs.xkcd.com/comics/standards.png)

> - [Official Best Practices for QML and Qt Quick from Qt](https://doc.qt.io/qt-6/qtquick-bestpractices.html)
> - [QML Best Practices Search](https://www.google.com/search?hl=en&q=qml+best+practices)

<!--
- Struggle with the paradigm shift
- Paradigm shift, Engelbart, mother of all demos, Xerox.
- Started out with me writing down what I learn and solutions to my mistakes.
- Good Qt et al documentation, lone line videos, but scattered
- Make it a more open conversation.
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
- Low barrier knowledge for new comers
- Aid in tooling

<!--
- What guidelines are is more important than what they aren't.
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
- Should be easy to imagine the code
- Discuss with your team and adjust
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
        id: myItem
    }
}
```

::right::

# Good - ID, Properties, and Signals

```qml
Item {
    Item {
        id: myItem
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
- Interface comes first
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
        id: dlg

        required property int index
        required property string name

        // Or onIndexChanged? onNameChanged?
        Component.onCompleted: {
            text = index + ". " + name
            rect.visible = dlg.index % 2
        }

        Rectangle {
            id: rect
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
        id: dlg

        required property int index
        required property string name

        text: index + ". " + name

        Rectangle {
            visible: dlg.index % 2
        }
    }
}
```

<!--
- What are the downsides?
- Eyes should go left to right, not top to bottom
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
-->

---

```cpp
void MyRectangle::setRadius(int r)
{
    m_radius = r;
    emit radiusChanged();
}
```

<!--
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
layout: two-cols
---

```qml
// CheckBox.qml
Item {
    id: root

    property bool checked
    property string text

    Rectangle {
        id: indicator
        width: 50
        height: 50
        visible: root.checked
        color: "red"
    }

    Label {
        anchors {
            left: indicator.right
            verticalCenter: indicator.verticalCenter
        }
        text: root.text
    }
}
```

::right::

```qml
// main.qml
Window {
    CheckBox {
        checked: true
        text: "CheckBox"
    }

    Column {
        width: 100

        Repeater {
            model: 5
            delegate: CheckBox {
                required property int index

                width: parent.width
                checked: index % 2 === 0
            }
        }
    }
}
```

---
layout: two-cols
---

```qml
// CheckBox.qml
Item {
    id: root

    property bool checked
    property string text

    implicitWidth: indicator.implicitWidth + label.implicitWidth
    implicitHeight: Math.max(indicator.implicitHeight, label.implicitHeight)

    Rectangle {
        id: indicator
        width: height
        height: parent.height * 0.5
        implicitWidth: 50
        implicitHeight: 50
        visible: root.checked
        color: "red"
    }

    Label {
        id: label
        anchors {
            left: indicator.right
            verticalCenter: indicator.verticalCenter
        }
        text: root.text
    }
}
```

::right::

```qml
// main.qml
Window {
    CheckBox {
        checked: true
        text: "CheckBox"
    }

    Column {
        width: 100

        Repeater {
            model: 5
            delegate: CheckBox {
                required property int index

                checked: index % 2 === 0
            }
        }
    }
}
```

---
layout: image-right
image: https://i.pinimg.com/originals/d9/eb/e2/d9ebe29636e1fac1e40b7a10da61bb7e.jpg
---

> ... our intellectual powers are rather geared to master **static relations** and that our powers
> to visualize **processes evolving in time** are relatively poorly developed. - Edsger W.
> Dijkstra, Go To Statement Considered Harmful

<!--
- Signals make it more dynmaic
- Properties over signals
- Properties establish relationships easily
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
