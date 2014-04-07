/*
 *  CopyAssets.js
 *
 *  Created by Diego Sandin on 2014-01-22.
 *  Copyright (c) 2012-2014 The Readium Foundation and contributors.
 *  
 *  The Readium SDK is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *  
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *  
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var fso = new ActiveXObject("Scripting.FileSystemObject");
var srcRoot = fso.GetFolder("..\\Readium").Path;
var deployRoot = fso.GetFolder("..\\").Path;
var rootFolder = fso.GetFolder(".\\").Path;

var configurations =
    [
        ["Debug",   "Debug"],
        ["Release", "Retail"]
    ]

var architecturesPhoneSupport =
    [
        ["ARM",     "arm"],
        ["x86",     "x86"]
    ]


var assetsPhoneSupport =
[
    ["\\deploy\\ARCHITECTURE\\CONFIGURATION\\PhoneSupport\\ReadiumPhoneSupport.pdb", "DesignTime\\CONFIGURATION\\ARCHITECTURE\\"],
    ["\\deploy\\ARCHITECTURE\\CONFIGURATION\\PhoneSupport\\ReadiumPhoneSupport.dll", "Redist\\CONFIGURATION\\ARCHITECTURE\\"]
]

for (var i in configurations)
{
    for (var j in architecturesPhoneSupport)
    {
        WScript.Echo("Copying PhoneSupport '" + configurations[i][0] + "' files of '" + architecturesPhoneSupport[j][0] + "' architeture ");
        for (var k in assetsPhoneSupport)
        {

            var inPath = fso.BuildPath(deployRoot, assetsPhoneSupport[k][0].replace("ARCHITECTURE", architecturesPhoneSupport[j][0]).replace("CONFIGURATION", configurations[i][0]));
            var outPath = assetsPhoneSupport[k][1].replace("ARCHITECTURE", architecturesPhoneSupport[j][1]).replace("CONFIGURATION", configurations[i][1]);

            WScript.Echo("Copying '" + inPath + "' to '" + outPath + "'");

            if (!fso.FolderExists(rootFolder + "\\" + outPath)) {
                var pathElements = outPath.split("\\");
                var currentPath = rootFolder;
                for (var l in pathElements) {
                    currentPath = currentPath + "\\" + pathElements[l];
                    if (!fso.FolderExists(currentPath)) {
                        WScript.Echo("Folder Doesn't Exists: '" + currentPath + "'");
                        fso.CreateFolder(currentPath);
                    }
                }
            }

            try {
                fso.CopyFile(inPath, outPath, true);
            } catch (e) {
                WScript.Echo("Error: '" + e.description + "'");
            }
        }
    }
}