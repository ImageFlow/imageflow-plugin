# Media Grid: Column Layout

**Problem**: On everything but mobile the column-based library layout confuses the focus at each step. Initially, the right side bar is empty space and the left sidebar presents actions that depend on the user selecting media. Once media has been selected the grid remains, limiting the space users have for working with their media.

**Solution**:  We should break this up into a stepped flow with a full width grid as the first step. As media is selected, contextual actions should appear based on the amount and kind of media selected.

Current view desktop:

![current-desktop](https://www.dropbox.com/s/00d1g8bnny3y5ec/Screen%20Shot%202015-04-30%20at%2011.32.18%20AM.png?dl=0)

Proposed view desktop:

![proposed-desktop](https://www.dropbox.com/s/4hfs8j9gcpg5c2z/Screen%20Shot%202015-04-30%20at%2011.42.04%20AM.png?dl=0)

Current view mobile:

![current-mobile](https://www.dropbox.com/s/nejf079ypu5eopa/Screen%20Shot%202015-04-30%20at%2011.44.05%20AM.png?dl=0)

![current-mobile-landscape](https://www.dropbox.com/s/fllacdxgh17gc3n/Screen%20Shot%202015-04-30%20at%2011.45.15%20AM.png?dl=0)

Proposed view mobile:

![proposed-mobile](https://cldup.com/Wt3mC7ymSw.png)

**User selects 1 image**

User selects 1 image and options are revealed for dealing with 1 image. These are:
- insert
- edit info
- edit picture

![select 1 image desktop](https://cldup.com/GVyrqeSWSA.png)

![select 1 image mobile](https://cldup.com/kWPU1OuBPI.png)

[wireframe](https://projects.invisionapp.com/share/QD2NHGDYB#/screens/72120163?maintainScrollPosition=true)

**User selects multiple images**

After user second image the create gallery button appears. 

![select 2 image desktop](https://cldup.com/EOTab_LEng.png)

![select 2 image desktop](https://cldup.com/iK5SVbzQOH.png)

[wireframe](https://projects.invisionapp.com/share/QD2NHGDYB#/screens/72120165?maintainScrollPosition=true)

## Tasks

To achieve the new screen:
- remove left hand menu
- make media grid full width of screen
- reveal contextual buttons based on user action
- user selects 1 image: reveal “insert”, “edit info”, and “edit image” and “[…]” buttons
- user selects 2nd image: reveal additional “create gallery” button


