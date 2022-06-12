import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Window 2.15

Window {
    width: 100
    height: 100
    visible: true

    component Rect: Rectangle {
        id: self

        readonly property alias pressed: ma.containsPress

        states: State {
            when: ma.containsMouse

            PropertyChanges { target: self; color: "red" }
        }

        MouseArea {
            id: ma
            anchors.fill: parent
            hoverEnabled: true
        }
    }

    Rect {
        id: rect
        width: 50
        height: 50
        states: State {
            when: rect.pressed

            PropertyChanges { target: rect; color: "yellow" }
        }
    }
}
