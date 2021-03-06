//
//  log.h
//  ePub3
//
//  Created by Pedro Reis Colaco (txtr) on 2013-07-02.
//  Copyright (c) 2012-2013 The Readium Foundation and contributors.
//
//  The Readium SDK is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//


#ifndef _LOG_JNI_H_
#define _LOG_JNI_H_


// Enable logging? 1=true/0=false
#define LOG_ENABLED 1


// If log enabled?
#if LOG_ENABLED == 1

#include <android/log.h>

// Make a string from value
#define STRINGIZE2(x) #x
#define STRINGIZE(x) STRINGIZE2(x)


// Android log tag and macros
#define  LOG_TAG    "libepub3 [" __FILE__ ":" STRINGIZE(__LINE__) "]"
#define  LOGI(...)  __android_log_print(ANDROID_LOG_INFO,LOG_TAG,__VA_ARGS__)
#define  LOGD(...)  __android_log_print(ANDROID_LOG_DEBUG,LOG_TAG,__VA_ARGS__)
#define  LOGW(...)  __android_log_print(ANDROID_LOG_WARN,LOG_TAG,__VA_ARGS__)
#define  LOGE(...)  __android_log_print(ANDROID_LOG_ERROR,LOG_TAG,__VA_ARGS__)

#else

// Dummy tag and macros
#define  LOG_TAG    ""
#define  LOGI(...)  ((void)0)
#define  LOGD(...)  ((void)0)
#define  LOGE(...)  ((void)0)

#endif // If log enabled?


#endif //ifndef _LOG_JNI_H_
