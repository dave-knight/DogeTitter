
cmake_minimum_required(VERSION 3.15.0)

project(smtg-vst3-helloworld
    VERSION ${vstsdk_VERSION}.0
    DESCRIPTION "Steinberg VST 3 helloworld example"
)

smtg_add_vst3plugin(helloworld 
    include/plugcontroller.h
    include/plugids.h
    include/plugprocessor.h
    include/version.h
    source/plugfactory.cpp
    source/plugcontroller.cpp
    source/plugprocessor.cpp
)

if(SMTG_MAC)
    smtg_target_set_bundle(helloworld
        BUNDLE_IDENTIFIER "com.steinberg.helloworldWithVSTGUI"
        COMPANY_NAME "Steinberg Media Technologies"
    )
elseif(SMTG_WIN)
    target_sources(helloworld
        PRIVATE 
            resource/info.rc
    )
endif()

configure_file(${SDK_ROOT}/cmake/templates/projectversion.h.in projectversion.h)

target_include_directories(helloworld PUBLIC
    "${PROJECT_BINARY_DIR}"
)

target_link_libraries(helloworld
    PRIVATE
        sdk
)