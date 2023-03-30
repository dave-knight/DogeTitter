
if(NOT SMTG_ADD_VSTGUI)
    return()
endif()

cmake_minimum_required(VERSION 3.15.0)

project(smtg-vst3-helloworldWithVSTGUI
    VERSION ${vstsdk_VERSION}.0
    DESCRIPTION "Steinberg VST 3 helloworldWithVSTGUI example"
)

smtg_add_vst3plugin(helloworldWithVSTGUI     
    include/plugcontroller.h
    include/plugids.h
    include/plugprocessor.h
    include/version.h
    source/plugfactory.cpp
    source/plugcontroller.cpp
    source/plugprocessor.cpp
)

if(SMTG_MAC)
    smtg_target_set_bundle(helloworldWithVSTGUI
        BUNDLE_IDENTIFIER "com.steinberg.helloworldWithVSTGUI"
        COMPANY_NAME "Steinberg Media Technologies"
)
elseif(SMTG_WIN)
    target_sources(helloworldWithVSTGUI
        PRIVATE 
            resource/info.rc
)
endif()

configure_file(${SDK_ROOT}/cmake/templates/projectversion.h.in projectversion.h)

target_include_directories(helloworldWithVSTGUI PUBLIC
    "${PROJECT_BINARY_DIR}"
)

target_link_libraries(helloworldWithVSTGUI
    PRIVATE
        sdk
        vstgui_support
)

smtg_target_add_plugin_resources(helloworldWithVSTGUI
    RESOURCES
        resource/plug.uidesc
        resource/background.png
        resource/animation_knob.png
        resource/onoff_button.png
        resource/background_2x.png
        resource/animation_knob_2x.png
        resource/onoff_button_2x.png
        resource/background_3x.png
        resource/animation_knob_3x.png
        resource/onoff_button_3x.png
)

smtg_target_add_plugin_snapshots(helloworldWithVSTGUI
    RESOURCES
        resource/41E3A6A2C1991743A64945DC3FB7D51D_snapshot.png
        resource/41E3A6A2C1991743A64945DC3FB7D51D_snapshot_2.0x.png
)
