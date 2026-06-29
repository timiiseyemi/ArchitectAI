"use client"

import { useMemo, useState } from "react"

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  MarkerType,
  BackgroundVariant,
} from "reactflow"

import "reactflow/dist/style.css"

import AwsNode from "./aws-node"
import ServiceDetails from "./service-details"

type Props = {
  services: string[]
}

const nodeTypes = {
  aws: AwsNode,
}

export default function ArchitectureDiagram({
  services,
}: Props) {
  const [selectedService, setSelectedService] =
    useState<string | null>(null)

  const { nodes, edges } = useMemo(() => {
    const nodeMap = new Map<string, Node>()

    const createNode = (
      service: string,
      x: number,
      y: number
    ) => {
      nodeMap.set(service, {
        id: service,
        type: "aws",
        position: { x, y },

        data: {
          label: service,
          onClick: () =>
            setSelectedService(service),
        },
      })
    }

    // -----------------------------
    // Premium AWS Layout
    // -----------------------------

    createNode("CloudFront", 450, 30)

    createNode("API Gateway", 450, 190)

    createNode("Lambda", 220, 380)
    createNode("Cognito", 680, 380)

    createNode("DynamoDB", 220, 610)
    createNode("S3", 680, 610)

    createNode("SNS", 450, 830)

    // Additional AI services

    let extraX = 980
    let extraY = 60

    services.forEach((service) => {
      if (!nodeMap.has(service)) {
        createNode(
          service,
          extraX,
          extraY
        )

        extraY += 190

        if (extraY > 800) {
          extraY = 60
          extraX += 260
        }
      }
    })

    const edges: Edge[] = []

    function connect(
      source: string,
      target: string
    ) {
      if (
        nodeMap.has(source) &&
        nodeMap.has(target)
      ) {
        edges.push({
          id: `${source}-${target}`,

          source,

          target,

          type: "bezier",

          animated: true,

          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#4f46e5",
          },

          style: {
            stroke: "#4f46e5",
            strokeWidth: 3,
            strokeDasharray: "6 4",
          },
        })
      }
    }

    // -----------------------------
    // Connections
    // -----------------------------

    connect("CloudFront", "API Gateway")

    connect("API Gateway", "Lambda")
    connect("API Gateway", "Cognito")

    connect("Lambda", "DynamoDB")
    connect("Lambda", "S3")

    connect("Lambda", "SNS")

    return {
      nodes: Array.from(nodeMap.values()),
      edges,
    }
  }, [services])

  return (
    <>
      <section>

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-semibold">
            Architecture Diagram
          </h2>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
            Interactive
          </span>

        </div>

        <div className="h-[900px] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-sm">

          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{
              padding: 0.35,
            }}
            minZoom={0.35}
            maxZoom={1.8}
            defaultEdgeOptions={{
              animated: true,

              type: "bezier",

              style: {
                stroke: "#4f46e5",
                strokeWidth: 3,
                strokeDasharray: "6 4",
              },

              markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 24,
                height: 24,
                color: "#4f46e5",
              },
            }}
            proOptions={{
              hideAttribution: true,
            }}
          >
            <MiniMap
              pannable
              zoomable
              nodeStrokeWidth={3}
            />

            <Controls showInteractive />

            <Background
              variant={BackgroundVariant.Dots}
              gap={24}
              size={1.2}
            />

          </ReactFlow>

        </div>

      </section>

      <ServiceDetails
        service={selectedService}
        onClose={() =>
          setSelectedService(null)
        }
      />
    </>
  )
}