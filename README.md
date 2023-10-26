# EasyModal

EasyModal is a lightweight JavaScript library for creating simple, customizable modals.

## Features

- Easy to use and integrate.
- Customizable in terms of content, size and presence of close button.
- Close the modal by clicking outside the modal or pressing the Escape key.
- Smooth transition to open and close the modal.

## Installation

Include the CSS and JavaScript files in your project. Make sure you add them in the right order to your HTML file.

```html
<link rel="stylesheet" href="path/to/your/easymodal.css">
<script src="path/to/your/easymodal.js"></script>
```

## Usage

Create an instance of EasyModal, passing an options object if necessary.

```javascript
const modal = new EasyModal({
    content: "<p>Your content here</p>",
    width: "500px",
    height: "300px",
    closeButton: true
});
```

Use the open() method to open the modal, and the close() method to close it.

```javascript
modal.open(); // Ouvre la modal
modal.close(); // Ferme la modal
```

You can also attach an event handler to a button or other element to control the opening of the modal.

```html
<button id="openModalBtn">Open Modal</button>
<script>
    document.getElementById('openModalBtn').addEventListener('click', function() {
        modal.open();
    });
</script>
```

To close the modal using the close button, be sure to include the closeModal() function in your JavaScript code.

```javascript
    window.closeModal = function() {
        modal.close();
    };
```

## Personnalisation

You can customize the content, size and presence of the modal's close button by passing an options object when creating the EasyModal instance.

```javascript
const modal = new EasyModal({
    content: "<h1>Title</h1><p>Modal content</p>",
    width: "600px",
    height: "400px",
    closeButton: false
});
```