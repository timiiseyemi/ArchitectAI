"use client"

import { Handle, Position } from "reactflow"
import AwsIcon from "./aws-icon"

export default function AwsNode({ data }: any) {
  return (
    <>
      {/* Incoming connection */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          width: 10,
          height: 10,
          background: "#4f46e5",
          border: "2px solid white",
        }}
      />

      <div
        onClick={data.onClick}
        className="
        group
        min-w-[220px]
        cursor-pointer
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-400
        hover:shadow-2xl
        active:scale-95
        "
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-blue-50">
            <AwsIcon
              service={data.label}
              size={42}
            />
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold text-slate-800">
              {data.label}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              AWS Service
            </p>
          </div>
        </div>
      </div>

      {/* Outgoing connection */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          width: 10,
          height: 10,
          background: "#4f46e5",
          border: "2px solid white",
        }}
      />
    </>
  )
}