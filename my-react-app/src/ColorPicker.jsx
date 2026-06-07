import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#2563EB");

    function handleColorChange(event) {
        setColor(event.target.value); 
    }
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
            <div className="flex w-full max-w-sm flex-col items-center rounded-2xl bg-white p-8 shadow-xl border border-slate-100">
                
                <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-800">
                    Color Picker
                </h1>
                
                {/* Dynamic Color Box Display */}
                <div 
                    className="flex h-48 w-full flex-col items-center justify-center rounded-xl transition-all duration-300 ease-in-out shadow-inner border border-black/5" 
                    style={{ backgroundColor: color }}
                >
                    <div className="rounded-lg bg-black/40 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        Selected Color: <span className="font-mono tracking-wider uppercase">{color}</span>
                    </div>
                </div>
                
                {/* Form Controls Wrapper */}
                <div className="mt-8 flex w-full flex-col gap-3">
                    <label className="text-sm font-bold tracking-wide text-slate-500 uppercase">
                        Select a color:
                    </label>
                    
                    <div className="relative flex items-center gap-4 rounded-xl border border-slate-200 p-3 bg-slate-50 hover:border-slate-300 transition-colors">
                        {/* Styled Invisible input with overlapping custom swatch trigger overlay */}
                        <input 
                            type="color" 
                            value={color} 
                            onChange={handleColorChange} 
                            className="h-10 w-12 cursor-pointer rounded-lg border-0 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-slate-200"
                        />
                        <span className="font-mono text-base font-bold uppercase text-slate-700">
                            {color}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ColorPicker;