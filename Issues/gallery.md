# Create / Edit Gallery:

**Problem**: Users should be able to see pictures uncropped and taking advantage of the size of the device where the 'media modal' is being presented.

**Solution**: Create an optional view mode. In the media grid, user has a toggle to activate and disable 'Full Width View" on the top right corner.

## Create New Gallery, Step 1: Select Images

### Problem: Superfluous Step
The user is presented with four options in the left panel: Insert Media, Insert Gallery, Set Featured Image, Insert From URL. When multiple images are uploaded and/or selected from the Media Library no change happens in the left panel.

#### Current view desktop:
![current-add-image](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/create-gallery-01-desktop.PNG)

When the user clicks Create Gallery they are provided with the same page and same selection as before, with the only visible change being the button in the bottom right hand corner.

#### Current view on desktop:
![current-add-gallery](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/create-gallery-02-desktop.PNG)

### Solution: Make Gallery Option Contextual and Immediate
When multiple images are selected the Create Gallery button becomes visible (or no longer greyed out).

#### Proposed view on desktop:
![proposed-add-image-add-gallery](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/create-gallery-03-desktop.PNG)

Same modality on mobile: On multiple image selected the Create Gallery button becomes available:

#### Proposed view on mobile:
![proposed-add-image-add-gallery-mobile](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/create-gallery-04-mobile.PNG)

## Create New Gallery, step 2: Review Images

### Problem: No current review method
Once images are selected they are displayed in a grid as above.

### Solution: Let user review gallery selection in large format
Once Create Gallery button is clicked, the display changes to full-width-view and allows the user to preview / edit info / edit image for each of the selected images.

In this view only images selected in the previous step are displayed.

#### First gallery image is displayed:
![proposed-gallery-preview-start](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/edit-gallery-01.PNG)

#### User swipes right to next image:
![proposed-gallery-preview-swipe](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/edit-gallery-02.PNG)

#### Second gallery image is displayed:
![proposed-gallery-preview-second](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/edit-gallery-03.PNG)

### User can choose Full Width View or Grid view
From the Full Width View of individual images in gallery, the user can choose to view images in Grid view and use "drag to reorder" functionality to... well... drag to reorder the images. Grid view should display images in the number of columns selected in Gallery Options (see below).

#### Grid view with drag-to-reorder on desktop and mobile
![proposed-gallery-preview-tile](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/edit-gallery-04.PNG)

## Create New Gallery, step 3: Gallery Options
Gallery Options drop-down menus (and room for extensions from plugins) is moved to the left while drag-and-drop ordering of images is moved to the right. Current right sidebar (Cancel Gallery, Edit Gallery, Add To Gallery) is removed.    

#### Current view on desktop:
![current-gallery-options-desktop](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/gallery-options-01-desktop.PNG)

#### Proposed view on desktop:
![proposed-gallery-options-desktop](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/gallery-options-02-desktop.PNG)

#### Proposed view on mobile:
![proposed-gallery-options-mobile](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/gallery-options-03-mobile.PNG)

### Problem: Image preview does not reflect option selection
The current preview of images in the Gallery Options page does not reflect option selection, in particular in relation to number of columns. Currently column numbers in the editor are based on window width.

#### Current view on desktop:
![current-gallery-options](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/gallery-options-04-desktop.PNG)

### Solution: Image preview reflects option change
When the column number is changed, the preview displays the selected column number (in the example below, 4).

#### Current view on desktop:
![current-gallery-options](https://dl.dropboxusercontent.com/u/194772/ImageFlow/gallery-images/gallery-options-05-desktop.PNG)


# Tasks

Incremental improvements to reach the final goal:
- Make "Create Gallery" link/button conditional on multi-image selection.
- Once "Create Gallery" is clicked, move user directly to gallery preview.
- Allow user to preview gallery selection in full-width view.
- Add button to allow user to switch between "grid" and full-width view.
- Simplify Gallery Options page by removing left sidebar.
- Allow Gallery Columns option to control number of columns in preview and drag-to-reorder views.
- Create icon for Gallery