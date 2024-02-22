#!/bin/bash

if [ "$#" -ne 5 ]; then
	echo "need to run this script with the following arguments:"
	echo "./create_transcript.sh FOLDER SOURCEFILENAME LANGUAGEMODEL OUTPUTFORMAT PROGRESSFILE"
	echo "Example:"
	echo "./create_transcript.sh 672536cdbea8737853 video.mp4 whisper srt progress.txt"
	exit -1
fi

FOLDERNAME=$1
SOURCEFILE=$2
MODEL=$3
OUTFORMAT=$4
PROGRESS=$5

# folder must exist(?)
pushd $FOLDERNAME

touch $PROGRESS
echo "Processing $SOURCEFILE" >> $PROGRESS
sleep 1
echo "Audio length = XXXXXX" >> $PROGRESS
sleep 1
echo "20% done" >> $PROGRESS
sleep 1
echo "60% done" >> $PROGRESS
sleep 1
echo "100% done" >> $PROGRESS
sleep 1
touch ${SOURCEFILE}.${OUTFORMAT}
echo "----> HOTOWE <----"  >> $PROGRESS
echo "----> HOTOWE <----"

popd

