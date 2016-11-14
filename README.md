#Ronin

##Canvas
```  
@ 100 100                         ; New canvas of size
@ ?                               ; Clear canvas
```

##Layers
``` 
# 3                               ; Layer 3
# ?                               ; Layer 1
``` 

##Background
``` 
* ff00ff                          ; Fill background with color
* ?                               ; Remove background
``` 

##Save File
``` 
$ new_name.jpg                    ; Create a new file with name
``` 

##Load File
``` 
/ file_name.jpg 10 10 100 100     ; Load image into canvas, at position 10,10
``` 

##Brush
``` 
& 10 1                            ; Size 10
& 1 0                             ; Eraser, Size 1
& 4 1 ff0000                      ; Red brush, Size 4
& ?                               ; Size 1, black
``` 

##Pointers
``` 
> 10 0                            ; Add pointer at pos
> 10 0                            ; Remove pointer at pos
> 0 0 400 0                       ; Mirror X, at 400px
> 0 _S                            ; Speed is y offset
> ?                               ; Remove pointers
``` 

##Zoom
``` 
= 75                              ; Zoom factor
= ?                               ; Zoom 100%
``` 

##Guides
``` 
| 10 10 100 100                   ; Draw a guide
| -100                            ; Draw a grid at every 100px
| ?                               ; Remove guides
``` 