# Media Grid: Multiselect

**Problem**: Multi-select in the grid is unclear on desktop, broken on mobile. A user can only easily select multiple pieces of media by changing the context to 'Create Gallery' or other multi-states. 

**Solution**: Selecting any media should be consistent in the media grid - a click should select. This works across all media, and in light of contextual actions, simplifies the learning curve for users.

Current view desktop:

![current-desktop](https://cldup.com/OFJGOovBlC.png)

Proposed view desktop:

![proposed-desktop](https://cldup.com/JNC9v6hTD4.png)

Current view mobile:

![current-mobile](https://cldup.com/QEmaltv2Bq.png)

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