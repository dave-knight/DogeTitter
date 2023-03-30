cmake_minimum_required(VERSION 3.14.0)
set(CMAKE_OSX_DEPLOYMENT_TARGET 10.13 CACHE STRING "")

set(vst3sdk_SOURCE_DIR "C:/Users/david/OneDrive/Coding Projects/3rd Party/VST_SDK/vst3sdk")
if(NOT vst3sdk_SOURCE_DIR)
    message(FATAL_ERROR "Path to VST3 SDK is empty!")
endif()

project(HarmoniPlex200
    # This is your plug-in version number. Change it here only.
    # Version number symbols usable in C++ can be found in
    # source/version.h and ${PROJECT_BINARY_DIR}/projectversion.h.
    VERSION 1.0.0.0 
    DESCRIPTION "HarmoniPlex200 VST 3 Plug-in"
)

set(SMTG_VSTGUI_ROOT "${vst3sdk_SOURCE_DIR}")

add_subdirectory(${vst3sdk_SOURCE_DIR} ${PROJECT_BINARY_DIR}/vst3sdk)
smtg_enable_vst3_sdk()

smtg_add_vst3plugin(HarmoniPlex200
    source/version.h
    source/myplugincids.h
    source/mypluginprocessor.h
    source/mypluginprocessor.cpp
    source/myplugincontroller.h
    source/myplugincontroller.cpp
    source/mypluginentry.cpp
)

#- VSTGUI Wanted ----
if(SMTG_ADD_VSTGUI)
    target_sources(HarmoniPlex200
        PRIVATE
            resource/myplugineditor.uidesc
    )
    target_link_libraries(HarmoniPlex200
        PRIVATE
            vstgui_support
    )
    smtg_target_add_plugin_resources(HarmoniPlex200
        RESOURCES
            "resource/myplugineditor.uidesc"
    )
endif(SMTG_ADD_VSTGUI)
# -------------------

smtg_target_add_plugin_snapshots (HarmoniPlex200
    RESOURCES
        resource/38873358E10A5F37AC09E23E228F88C6_snapshot.png
        resource/38873358E10A5F37AC09E23E228F88C6_snapshot_2.0x.png
)

target_link_libraries(HarmoniPlex200
    PRIVATE
        sdk
)

smtg_target_configure_version_file(HarmoniPlex200)

if(SMTG_MAC)
    smtg_target_set_bundle(HarmoniPlex200
        BUNDLE_IDENTIFIER com.plexusharmony.com
        COMPANY_NAME "Plexus Harmony"
    )
    smtg_target_set_debug_executable(HarmoniPlex200
        "/Applications/VST3PluginTestHost.app"
        "--pluginfolder;$(BUILT_PRODUCTS_DIR)"
    )
elseif(SMTG_WIN)
    target_sources(HarmoniPlex200 PRIVATE 
        resource/win32resource.rc
    )
    if(MSVC)
        set_property(DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT HarmoniPlex200)

        smtg_target_set_debug_executable(HarmoniPlex200
            "$(ProgramW6432)/Steinberg/VST3PluginTestHost/VST3PluginTestHost.exe"
            "--pluginfolder \"$(OutDir)/\""
        )
    endif()
endif(SMTG_MAC)
