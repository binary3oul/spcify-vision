/**
 * Spotlight.js v0.7.8 (Bundle)
 * Copyright 2019-2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
(function(){'use strict';var aa=document.createElement("style");aa.innerHTML="@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}#spotlight .contain{-o-object-fit:contain;object-fit:contain}#spotlight .autofit{-o-object-fit:none;object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMUExNSwxNSwwLDEsMCwzMSwxNiwxNSwxNSwwLDAsMCwxNiwxWm0wLDJhMTMsMTMsMCwwLDEsOC40NSwzLjE0TDYuMTQsMjQuNDVBMTMsMTMsMCwwLDEsMTYsM1ptMCwyNmExMywxMywwLDAsMS04LjQ1LTMuMTRMMjUuODYsNy41NUExMywxMywwLDAsMSwxNiwyOVoiIGlkPSJiYW5fc2lnbl9jcm9zc2VkX2NpcmNsZSIvPjwvc3ZnPg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:22px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}.spl-download{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNDEuNzMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0MS43MzIgMTQxLjczMiIgd2lkdGg9IjE0MS43MzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIwLjY3NCwxMjUuMTM4SDIwLjc5M3YxNi41OTRoOTkuODgxVjEyNS4xMzh6IE0xMTkuMDE5LDU4Ljc3NmMtMi41NjEtMi41NjItNi43MTYtMi41NjItOS4yNzUsMEw3Ny4yMSw5MS4zMTJWNi41NjIgICBDNzcuMjEsMi45MzYsNzQuMjY5LDAsNzAuNjQ4LDBjLTMuNjI0LDAtNi41NiwyLjkzNy02LjU2LDYuNTYzdjg0Ljc1TDMxLjk5Miw1OS4yMThjLTIuNTYyLTIuNTY0LTYuNzE1LTIuNTY0LTkuMjc3LDAgICBjLTIuNTY1LDIuNTYyLTIuNTY1LDYuNzE2LDAsOS4yNzlsNDMuMjk0LDQzLjI5M2MwLjE1LDAuMTU0LDAuMzE0LDAuMjk5LDAuNDgxLDAuNDM4YzAuMDc2LDAuMDYyLDAuMTU1LDAuMTEzLDAuMjM0LDAuMTc2ICAgYzAuMDk0LDAuMDY1LDAuMTg2LDAuMTQyLDAuMjc5LDAuMjA2YzAuMDk3LDAuMDYzLDAuMTkyLDAuMTE0LDAuMjg2LDAuMTc0YzAuMDg4LDAuMDU0LDAuMTc0LDAuMTA1LDAuMjY1LDAuMTUzICAgYzAuMSwwLjA1NiwwLjE5OSwwLjEsMC4yOTgsMC4xNDdjMC4wOTcsMC4wNDUsMC4xOSwwLjA5MSwwLjI4MywwLjEzMmMwLjA5OCwwLjA0LDAuMTk2LDAuMDcyLDAuMjk1LDAuMTA1ICAgYzAuMTA0LDAuMDM4LDAuMjA3LDAuMDc4LDAuMzEyLDAuMTA5YzAuMTAxLDAuMDMsMC4xOTcsMC4wNTIsMC4yOTcsMC4wNzdjMC4xMDgsMC4wMjMsMC4yMTQsMC4wNTgsMC4zMjQsMC4wNzggICBjMC4xMTUsMC4wMjEsMC4yMzEsMC4wMzMsMC4zNDYsMC4wNTRjMC4wOTcsMC4wMTUsMC4xOTIsMC4wMzIsMC4yODksMC4wNDJjMC40MywwLjA0MiwwLjg2NSwwLjA0MiwxLjI5NSwwICAgYzAuMS0wLjAxLDAuMTkxLTAuMDI3LDAuMjg5LTAuMDQyYzAuMTE0LTAuMDIxLDAuMjMzLTAuMDI5LDAuMzQ0LTAuMDU0YzAuMTA5LTAuMDIxLDAuMjE3LTAuMDU1LDAuMzI0LTAuMDc4ICAgYzAuMTAyLTAuMDI1LDAuMTk5LTAuMDQ3LDAuMjk5LTAuMDc3YzAuMTA1LTAuMDMxLDAuMjA3LTAuMDcxLDAuMzEyLTAuMTA5YzAuMTAyLTAuMDMsMC4xOTUtMC4wNjIsMC4yOTUtMC4xMDUgICBjMC4wOTYtMC4wNDEsMC4xOTEtMC4wODcsMC4yODMtMC4xMzJjMC4xLTAuMDQ4LDAuMTk5LTAuMDkyLDAuMjk3LTAuMTQ3YzAuMDkxLTAuMDQ4LDAuMTc3LTAuMTA0LDAuMjY0LTAuMTUzICAgYzAuMDk4LTAuMDYsMC4xOTMtMC4xMSwwLjI4Ny0wLjE3NGMwLjA5Ni0wLjA2NCwwLjE4OS0wLjE0MSwwLjI4MS0wLjIwNmMwLjA3Ni0wLjA2MiwwLjE1Ni0wLjExMywwLjIzMy0wLjE3NiAgIGMwLjI0OS0wLjIwNCwwLjQ3OS0wLjQzNywwLjY5NC0wLjY3YzAuMDc2LTAuMDY3LDAuMTU0LTAuMTMxLDAuMjI5LTAuMjAzbDQzLjI5NC00My4yOTYgICBDMTIxLjU4MSw2NS40OTEsMTIxLjU4MSw2MS4zMzcsMTE5LjAxOSw1OC43NzYiLz48L2c+PC9zdmc+);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}.spl-play{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}.spl-info{background-image:url(../img/info.svg)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}";
var ba=document.getElementsByTagName("head")[0];ba.firstChild?ba.insertBefore(aa,ba.firstChild):ba.appendChild(aa);Object.assign||(Object.assign=function(a,b){for(var c=Object.keys(b),e=0,f;e<c.length;e++)f=c[e],a[f]=b[f];return a});Element.prototype.closest||(Element.prototype.closest=function(a){a=a.substring(1);for(var b=this;b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentElement}return null});function d(a,b,c){a.classList[c?"add":"remove"](b)}function g(a,b,c){c=""+c;a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)}var ca=0;function da(a,b){b&&(g(a,"transition","none"),b());ca||(ca=a.clientTop&&0);b&&g(a,"transition","")}function h(a,b,c,e){ea(!0,a,b,c,e)}function ea(a,b,c,e,f){b[(a?"add":"remove")+"EventListener"](c,e,f||!1===f?f:!0)}function k(a,b){a.stopPropagation();b&&a.preventDefault()}function l(a,b){g(a,"display",b?"":"none")}
function fa(a,b){g(a,"visibility",b?"":"hidden")}function m(a,b){g(a,"transition",b?"":"none")};var ha="info theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),ia={info:1,page:1,close:1,autofit:1,"zoom-in":1,"zoom-out":1,prev:1,next:1,fullscreen:1};var n=document.createElement("div");n.id="spotlight";n.innerHTML="<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>";var ja={},ka=document.createElement("video");function la(a,b,c,e){if("node"!==e)for(var f=Object.keys(c),A=0,w;A<f.length;A++)if(w=f[A],3<w.length&&0===w.indexOf("src"))if("video"===e){var K=ja[w];if(K){if(0<K){var Ta=c[w];break}}else if(ka.canPlayType("video/"+w.substring(3).replace("-","").toLowerCase())){ja[w]=1;Ta=c[w];break}else ja[w]=-1}else if(K=parseInt(w.substring(4),10))if(K=Math.abs(b-K),!qb||K<qb){var qb=K;Ta=c[w]}return Ta||c.src||c.href||a.src||a.href};var ma={},na=navigator.connection,oa=window.devicePixelRatio||1,p,q,pa,qa,r,t,ra,sa,u,v,x,ta,y,z,B,C,D,E,ua,va,F,wa,xa,ya,za,Aa,Ba,G,Ca,Da,Ea,Fa,H,Ga,Ha,Ia,Ja,I,J,L,Ka,M,La=document.createElement("img"),Ma,Na,N,Oa=1,Pa,Qa,Ra,Sa,Ua,Va,Wa,Xa,O,Ya,P,Q,R,S,Za,T,$a,ab,U,V=.8,bb=0;h(document,"click",cb);
function db(){function a(c){return ma[c]=(n||document).getElementsByClassName("spl-"+c)[0]}if(!J){J=document.body;Ma=a("scene");Na=a("header");N=a("footer");Pa=a("title");Qa=a("description");Ra=a("button");Sa=a("prev");Ua=a("next");Wa=a("page");O=a("progress");Ya=a("spinner");Ka=[a("pane")];W("close",eb);J[T="requestFullscreen"]||J[T="msRequestFullscreen"]||J[T="webkitRequestFullscreen"]||J[T="mozRequestFullscreen"]||(T="");T?($a=T.replace("request","exit").replace("mozRequest","mozCancel").replace("Request",
"Exit"),Va=W("fullscreen",fb)):ha.pop();W("info",gb);W("autofit",hb);W("zoom-in",ib);W("zoom-out",jb);W("theme",kb);Xa=W("play",lb);W("download",mb);h(Sa,"click",nb);h(Ua,"click",ob);var b=a("track");h(b,"mousedown",pb);h(b,"mousemove",rb);h(b,"mouseleave",sb);h(b,"mouseup",sb);h(b,"touchstart",function(c){c.touches&&2!==c.touches.length?pb(c):(k(c,!0),v=!0,x=!1,bb=0,(c=c.touches)&&2==c.length&&(X=ab=Math.hypot(c[0].pageX-c[1].pageX,c[0].pageY-c[1].pageY)))},{passive:!1});h(b,"touchmove",function(c){if(c.touches&&
2!==c.touches.length)rb(c);else if(k(c),v){var e=c.touches;e&&2==e.length&&(bb++,x=!0,U=Math.hypot(e[0].pageX-e[1].pageX,e[0].pageY-e[1].pageY),e="",U>X?e="in":U<X&&(e="out"),tb!=e&&(bb=0,tb=e),U>X&&!1!==E["zoom-in"]&&3<bb?(ib(c,.93),tb="in",X=U):U<X&&!1!==E["zoom-in"]&&6<bb&&(jb(c,.5),tb="out",X=U))}},{passive:!0});h(b,"touchend",function(c){c.touches&&2!==c.touches.length?sb(c):(k(c),v&&(x||ub(),v=!1))});h(Ra,"click",function(){Fa?Fa(B,E):Ea&&(location.href=Ea)})}}
function W(a,b){var c=document.createElement("div");c.className="spl-"+a;h(c,"click",b);Na.appendChild(c);return ma[a]=c}function cb(a){var b=a.target.closest(".spotlight");if(b){k(a,!0);a=b.closest(".spotlight-group");D=(a||document).getElementsByClassName("spotlight");for(var c=0;c<D.length;c++)if(D[c]===b){va=a&&a.dataset;vb(c+1);break}}}
function vb(a){if(C=D.length){J||db();xa&&xa(a);for(var b=Ka[0],c=b.parentNode,e=Ka.length;e<C;e++){var f=b.cloneNode(!1);g(f,"left",100*e+"%");c.appendChild(f);Ka[e]=f}L||(J.appendChild(n),wb());B=a||1;m(Ma);xb(!0);T&&l(Va,0<screen.availHeight-window.innerHeight);history.pushState({spl:1},"");history.pushState({spl:2},"");m(n,!0);d(J,"hide-scrollbars",!0);d(n,"show",!0);yb(!0);wb();zb();G&&lb(!0,!0)}}function Y(a,b){a=E[a];return"undefined"!==typeof a?(a=""+a,"false"!==a&&(a||b)):b}
function Ab(a){a?da(M,Ab):(m(Ma,Ja),g(M,"opacity",Ia?0:1),Bb(Ha&&.8),I&&d(M,I,!0))}
function Cb(a){L=Ka[a-1];M=L.firstChild;B=a;if(M)y&&hb(),Aa&&d(M,Aa,!0),Ab(!0),I&&d(M,I),Ia&&g(M,"opacity",1),Ha&&g(M,"transform",""),g(M,"visibility","visible"),Q&&(La.src=Q),G&&Db(R);else{var b=P.media,c=Y("spinner",!0);if("video"===b)Eb(c,!0),M=document.createElement("video"),M.onloadedmetadata=function(){M===this&&(M.onerror=null,M.width=M.videoWidth,M.height=M.videoHeight,Fb(),Eb(c),Cb(a))},M.poster=E.poster,M.preload=Da?"auto":"metadata",M.controls=Y("controls",!0),M.autoplay=E.autoplay,M.h=
Y("inline"),M.muted=Y("muted"),M.src=P.src,L.appendChild(M);else{if("node"===b){M=P.src;"string"===typeof M&&(M=document.querySelector(M));M&&(M.g||(M.g=M.parentNode),Fb(),L.appendChild(M),Cb(a));return}Eb(c,!0);M=document.createElement("img");M.onload=function(){M===this&&(M.onerror=null,Eb(c),Cb(a),Fb())};M.src=P.src;L.appendChild(M)}M&&(c||g(M,"visibility","visible"),M.onerror=function(){M===this&&(Gb(M),d(Ya,"error",!0),Eb(c))})}}function Eb(a,b){a&&d(Ya,"spin",b)}
function Hb(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function Ib(){wb();M&&Fb();if(T){var a=Hb();d(Va,"on",a);a||l(Va,0<screen.availHeight-window.innerHeight)}}function wb(){r=n.clientWidth;t=n.clientHeight}function Fb(){ra=M.clientWidth;sa=M.clientHeight}function Bb(a){g(M,"transform","translate(-50%, -50%) scale("+(a||u)+")")}function Z(a,b){g(L,"transform",a||b?"translate("+a+"px, "+b+"px)":"")}
function Jb(a,b,c){b?da(Ma,function(){Jb(a,!1,c)}):g(Ma,"transform","translateX("+(100*-a+(c||0))+"%)")}function yb(a){ea(a,window,"keydown",Kb);ea(a,window,"wheel",Lb);ea(a,window,"resize",Ib);ea(a,window,"popstate",Mb)}function Mb(a){L&&a.state.spl&&eb(!0)}
function Kb(a){if(L){var b=!1!==E["zoom-in"];switch(a.keyCode){case 8:b&&hb();break;case 27:eb();break;case 32:G&&lb();break;case 37:nb();break;case 39:ob();break;case 38:case 107:case 187:b&&ib();break;case 40:case 109:case 189:b&&jb();break;case 73:gb()}}}function Lb(a){L&&!1!==E["zoom-in"]&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?jb():ib())}function lb(a,b){("boolean"===typeof a?a:!R)===!R&&(R=R?clearTimeout(R):1,d(Xa,"on",R),b||Db(R))}
function Db(a){wa&&(da(O,function(){g(O,"transition-duration","");g(O,"transform","")}),a&&(g(O,"transition-duration",Ga+"s"),g(O,"transform","translateX(0)")));a&&(R=setTimeout(ob,1E3*Ga))}function zb(){Ba&&(Za=Date.now()+2950,S||(d(n,"menu",!0),Nb(3E3)))}function Nb(a){S=setTimeout(function(){var b=Date.now();b>=Za?(d(n,"menu"),S=0):Nb(Za-b)},a)}function ub(a){"boolean"===typeof a&&(S=a?S:0);S?(S=clearTimeout(S),d(n,"menu")):zb()}
function pb(a){k(a,!0);v=!0;x=!1;var b=a.touches;b&&(b=b[0])&&(a=b);ta=ra*u<=r;pa=a.pageX;qa=a.pageY;m(L)}function sb(a){k(a);if(v){if(x){console.log(ta);if(ta&&x){var b=(a=p<-(r/7)&&(B<C||F))||p>r/7&&(1<B||F);if(a||b)Jb(B-1,!0,p/r*100),a&&ob()||b&&nb();p=0;Z()}m(L,!0)}else ub();v=!1}}function rb(a){k(a);if(v){var b=a.touches;b&&(b=b[0])&&(a=b);b=(ra*u-r)/2;p-=pa-(pa=a.pageX);ta||(p>b?p=b:p<-b&&(p=-b),sa*u>t&&(b=(sa*u-t)/2,q-=qa-(qa=a.pageY),q>b?q=b:q<-b&&(q=-b)));x=!0;Z(p,q)}else zb()}var X,tb;
function fb(a){var b=Hb();if("boolean"!==typeof a||a!==!!b)if(b)document[$a]();else n[T]()}function kb(a){"string"!==typeof a&&(a=z?"":Ca||"white");z!==a&&(z&&d(n,z),a&&d(n,a,!0),z=a)}function hb(a){"boolean"===typeof a&&(y=!a);y=1===u&&!y;d(M,"autofit",y);g(M,"transform","");u=1;q=p=0;Fb();m(L);Z()}function ib(a,b){V=b||.65;console.log("zoom_factor",V);a=u/V;50>=a&&(y&&hb(),p/=V,q/=V,Z(p,q),Ob(a))}
function jb(a,b){V=b||.65;a=u*V;console.log("zoom_out value",a);y&&hb();if(1<a){b=(ra*a-r)/2;var c=(sa*a-t)/2;p*=V;q*=V;p>b?p=b:p<-b&&(p=-b);q>c?q=c:q<-c&&(q=-c);Z(p,q);Ob(a)}else if(1>a||p!=(ra-r)/2||q!=(sa-t)/2)a=1,p=q=0,ta=!0,Z(p,q),Ob(a)}function Ob(a){u=a||1;Bb()}function gb(){Oa=!Oa;fa(N,Oa)}function mb(){var a=J,b=document.createElement("a"),c=M.src;b.href=c;b.download=c.substring(c.lastIndexOf("/")+1);a.appendChild(b);b.click();a.removeChild(b)}
function eb(a){setTimeout(function(){J.removeChild(n);L=M=P=E=va=D=xa=ya=za=Fa=null},200);d(J,"hide-scrollbars");d(n,"show");fb(!1);yb();history.go(!0===a?-1:-2);Q&&(La.src="");R&&lb();M&&Gb(M);S&&(S=clearTimeout(S));z&&kb();H&&d(n,H);za&&za()}function Gb(a){if(a.g)a.g.appendChild(a),a.g=null;else{var b=a.parentNode;b&&b.removeChild(a);a.src=a.onerror=""}}function nb(a){a&&zb();if(1<C){if(1<B)return Pb(B-1);if(F)return Jb(C,!0),Pb(C)}}
function ob(a){a&&zb();if(1<C){if(B<C)return Pb(B+1);if(F)return Jb(-1,!0),Pb(1);R&&lb()}}function Pb(a){if(a!==B){R?(clearTimeout(R),Db()):zb();var b=a>B;B=a;xb(b);return!0}}
function Qb(a){var b=D[B-1],c=b;E={};va&&Object.assign(E,va);Object.assign(E,c.dataset||c);ua=E.media;Fa=E.onclick;Ca=E.theme;H=E["class"];Ba=Y("autohide",!0);F=Y("infinite");wa=Y("progress",!0);G=Y("autoslide");Da=Y("preload",!0);Ea=E.buttonHref;Ga=G&&parseFloat(G)||7;z||Ca&&kb(Ca);H&&d(n,H,!0);H&&da(n);if(c=E.control){c="string"===typeof c?c.split(","):c;for(var e=0;e<ha.length;e++)E[ha[e]]=!1;for(e=0;e<c.length;e++){var f=c[e].trim();"zoom"===f?E["zoom-in"]=E["zoom-out"]=!0:E[f]=!0}}c=E.animation;
Ha=Ia=Ja=!c;I=!1;if(c)for(c="string"===typeof c?c.split(","):c,e=0;e<c.length;e++)f=c[e].trim(),"scale"===f?Ha=!0:"fade"===f?Ia=!0:"slide"===f?Ja=!0:f&&(I=f);Aa=E.fit;e=na&&na.downlink;c=Math.max(t,r)*oa;e&&1200*e<c&&(c=1200*e);var A;P={media:ua,src:la(b,c,E,ua),title:Y("title",b.alt||b.title||(A=b.firstElementChild)&&(A.alt||A.title))};Q&&(La.src=Q="");Da&&a&&(b=D[B])&&(a=b.dataset||b,(A=a.media)&&"image"!==A||(Q=la(b,c,a,A)));for(b=0;b<ha.length;b++)a=ha[b],l(ma[a],Y(a,ia[a]))}
function xb(a){q=p=0;u=1;if(M)if(M.onerror)Gb(M);else{var b=M;setTimeout(function(){b&&M!==b&&(Gb(b),b=null)},650);Ab();Z()}N&&fa(N,0);Qb(a);Jb(B-1);d(Ya,"error");Cb(B);m(L);Z();a=P.title;var c=Y("description"),e=Y("button"),f=a||c||e;f&&(a&&(Pa.firstChild.nodeValue=a),c&&(Qa.firstChild.nodeValue=c),e&&(Ra.firstChild.nodeValue=e),l(Pa,a),l(Qa,c),l(Ra,e),g(N,"transform","all"===Ba?"":"none"));Ba||d(n,"menu",!0);fa(N,Oa&&f);fa(Sa,F||1<B);fa(Ua,F||B<C);Wa.firstChild.nodeValue=1<C?B+" / "+C:"";ya&&ya(B,
E)};window.Spotlight={init:db,theme:kb,fullscreen:fb,download:mb,autofit:hb,next:ob,prev:nb,goto:Pb,close:eb,zoom:Ob,menu:ub,show:function(a,b,c){D=a;b&&(va=b,xa=b.onshow,ya=b.onchange,za=b.onclose,c=c||b.index);vb(c)},play:lb,addControl:W,removeControl:function(a){var b=ma[a];b&&(Na.removeChild(b),ma[a]=null)}};}).call(this);
