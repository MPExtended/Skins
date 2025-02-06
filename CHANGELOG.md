# Bootstrap skins 0.7.260

* Bootstrap v3.3.7

* Recording/Details.cshtml - Changed "Recorded On:" in Details Tab to show in a more friendly format (format is 12hr based for eu-US and 24hr for all other Locales)
* Recording/Details.cshtml - Changed "Genre:" in Details Tab to show in Title Case
* Recording/Details.cshtml - Fixed issue with "Durations:" in Details Tab - Issue with TV Shows > 1 hour were only showing minutes portion of time (for example, a 1hour 15min show would show as only 15mins)
* Recording/Index.cshtml - Changed Javascript to modify the behaviour of the toggle button 'Expand Groups' - It's 'text' now switches between 'Expand Groups' and 'Collapse Groups'
* Television/TVGuide.cshtml - Removed Date/Time Picker as it seemed to have no function and didn't work well with differing date/time formats

### Navigation Issue with Buttons..

* Fixed the issue with href="#" in all dropdown menus/buttons
* Had to replace all instances of href="#" with href="@Request.RawUrl"

For example - Lines such as:
```html
<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
```

Are Now:
```html
<a class="btn dropdown-toggle" data-toggle="dropdown" href="@Request.RawUrl">
```

# Bootstrap skins 0.7.255

* Initial release
* Bootstrap v2.3.2
