# This is Ukrit's Midas `quickestPath` test
This is find quickestPath test by Midas using `Typescript` language
- input is in the code doesn't take from user
- can change input value in code
- the system will print out progress between start to destination with `quickestPath`

## Input example (same as the case in test file)
```
const portals: { location: number; destination: number }[] = [
    { location: 55, destination: 38 },
    { location: 14, destination: 35 },
    { location: 91, destination: 48 },
    { location: 30, destination: 8 },
    { location: 31, destination: 70 },
    { location: 63, destination: 83 },
    { location: 3, destination: 39 },
    { location: 47, destination: 86 },
    { location: 71, destination: 93 },
    { location: 21, destination: 4 },
    { location: 44, destination: 65 },
    { location: 96, destination: 66 },
    { location: 79, destination: 42 },
    { location: 87, destination: 54 },
    { location: 90, destination: 119 },
    { location: 120, destination: 149 },
    { location: 150, destination: 179 },
    { location: 180, destination: 200 }
];
```

Code print out progress
```
================================================================================
turn : 1 currentLocation : 1
calculating move from : 1 to : 2
calculating move from : 2 to : 3
found portal -> from : 3 to : 39
calculating move from : 3 to : 39
found new maxDestination: 39
calculating move from : 4 to : 5
calculating move from : 5 to : 6
calculating move from : 6 to : 7
calculating move from : 7 to : 8
calculating move from : 8 to : 9
calculating move from : 9 to : 10
calculating move from : 10 to : 11
calculating move from : 11 to : 12
move from : 1  to : 39
================================================================================
================================================================================
turn : 2 currentLocation : 39
calculating move from : 39 to : 40
calculating move from : 40 to : 41
calculating move from : 41 to : 42
calculating move from : 42 to : 43
calculating move from : 43 to : 44
found portal -> from : 44 to : 65
calculating move from : 44 to : 65
found new maxDestination: 65
calculating move from : 45 to : 46
calculating move from : 46 to : 47
found portal -> from : 47 to : 86
calculating move from : 47 to : 86
found new maxDestination: 86
calculating move from : 48 to : 49
calculating move from : 49 to : 50
move from : 39  to : 86
================================================================================
================================================================================
turn : 3 currentLocation : 86
calculating move from : 86 to : 87
found portal -> from : 87 to : 54
calculating move from : 87 to : 54
calculating move from : 88 to : 89
calculating move from : 89 to : 90
found portal -> from : 90 to : 119
calculating move from : 90 to : 119
found new maxDestination: 119
found portal -> from : 91 to : 48
calculating move from : 91 to : 48
calculating move from : 92 to : 93
calculating move from : 93 to : 94
calculating move from : 94 to : 95
calculating move from : 95 to : 96
found portal -> from : 96 to : 66
calculating move from : 96 to : 66
move from : 86  to : 119
================================================================================
================================================================================
turn : 4 currentLocation : 119
calculating move from : 119 to : 120
found portal -> from : 120 to : 149
calculating move from : 120 to : 149
found new maxDestination: 149
calculating move from : 121 to : 122
calculating move from : 122 to : 123
calculating move from : 123 to : 124
calculating move from : 124 to : 125
calculating move from : 125 to : 126
calculating move from : 126 to : 127
calculating move from : 127 to : 128
calculating move from : 128 to : 129
calculating move from : 129 to : 130
move from : 119  to : 149
================================================================================
================================================================================
turn : 5 currentLocation : 149
calculating move from : 149 to : 150
found portal -> from : 150 to : 179
calculating move from : 150 to : 179
found new maxDestination: 179
calculating move from : 151 to : 152
calculating move from : 152 to : 153
calculating move from : 153 to : 154
calculating move from : 154 to : 155
calculating move from : 155 to : 156
calculating move from : 156 to : 157
calculating move from : 157 to : 158
calculating move from : 158 to : 159
calculating move from : 159 to : 160
move from : 149  to : 179
================================================================================
================================================================================
turn : 6 currentLocation : 179
calculating move from : 179 to : 180
found portal -> from : 180 to : 200
calculating move from : 180 to : 200
found new maxDestination: 200
calculating move from : 181 to : 182
calculating move from : 182 to : 183
calculating move from : 183 to : 184
calculating move from : 184 to : 185
calculating move from : 185 to : 186
calculating move from : 186 to : 187
calculating move from : 187 to : 188
calculating move from : 188 to : 189
calculating move from : 189 to : 190
move from : 179  to : 200
================================================================================
6
```
the result is `6` turn