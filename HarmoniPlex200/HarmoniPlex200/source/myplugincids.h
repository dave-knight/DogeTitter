//------------------------------------------------------------------------
// Copyright(c) 2023 Plexus Harmony.
//------------------------------------------------------------------------

#pragma once

#include "pluginterfaces/base/funknown.h"
#include "pluginterfaces/vst/vsttypes.h"

namespace MyCompanyName {
//------------------------------------------------------------------------
static const Steinberg::FUID kHarmoniPlex200ProcessorUID (0x38873358, 0xE10A5F37, 0xAC09E23E, 0x228F88C6);
static const Steinberg::FUID kHarmoniPlex200ControllerUID (0xD03FEF51, 0xF9245F67, 0x95ADE7AD, 0xD4F7086F);

#define HarmoniPlex200VST3Category "Instrument"

//------------------------------------------------------------------------
} // namespace MyCompanyName
