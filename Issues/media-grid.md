
## Media Grid:

+ __[Users are presented with options they do not need, or cannot use.](https://github.com/ImageFlow/imageflow-plugin/blob/master/Issues/media-grid-options.md)__

+ __Adding Files is hidden in a separate tab from selecting media.__

  We should remove the 'Upload Files' tab and make the first item in the grid an 'Add Files' option. This can also include the 'Insert from URL' option.

+ __Three-column library layout presents too much focus on library at all times and crowds screen for later steps.__

  We should break this up into a stepped flow, allowing for selection followed by contextual action.

+ __The left sidebar takes up space within the media grid, but is largely empty, and many of the choices are only useful *after* a user has chosen their media.__

  The left sidebar should be removed  (as it is currently on mobile) and the actions within it should be become CTAs in the bottom toolbar.

+ __Choosing an image on mobile, reveals the right sidebar (details) which covers the grid and cannot be hidden.__

  The right sidebar should be removed and replaced with a new state that is activated by user choice. The grid should be preserved for selecting media.
	
+ __Grid images are neither large enough to make detailed decisions, nor small enough to allow rapid library scanning.__

  We should allow users to see both small and large images sizes. The small should be a true thumbnail, and the large should be a full-width image to allow for details to be seen no matter the screen size.

+ __Action items (ctas) for inserting images are often below the fold__

  The modal needs to be variable height, and all CTAs should be persistent on-screen.
	
+ __Multi-select in the grid is unclear on desktop, broken on mobile.__

  We should make any click on an image in the grid count as a selection of that image. This will work on all platforms, and is intuitive. This does not have to change the shift and command click behavior currently implemented.

+ __There is no clear path to edit an image - only a small link in the right sidebar__

  The edit option needs to be more visible to the user, occupying a space near the other action items for an image.

+ __The media grid is not currently extensible by developers__

  A menu of 'more' options should be added for developers to hook other actions for media to. These can have context (media type, amount) and bubble up as needed.

____
