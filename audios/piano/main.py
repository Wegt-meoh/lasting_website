import os
from os import path

audioList=os.listdir('/Users/quepengbiao/reactProj/lasting_website/public/audios/piano/mp3')
sourceFileType='mp3'
targetFileType='ogg'

for i in audioList:
    if i.endswith(sourceFileType) :
        outputName=i[0:-(len(sourceFileType)+1)]
        cmd='ffmpeg -i /Users/quepengbiao/reactProj/lasting_website/public/audios/piano/mp3/{:s}.{:s} /Users/quepengbiao/reactProj/lasting_website/public/audios/piano/ogg/{:s}.{:s}'.format(outputName,sourceFileType,outputName,targetFileType)
        os.system(cmd)
