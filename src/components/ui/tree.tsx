"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TreeDataItem {
  id: string | number
  name: string
  icon?: React.ReactNode
  children?: TreeDataItem[]
}

interface TreeProps {
  data: TreeDataItem[]
  initialSelectedItemId?: string | number
  onSelectChange?: (item: TreeDataItem) => void
  expandAll?: boolean
}

export function Tree({
  data,
  initialSelectedItemId,
  onSelectChange,
  expandAll = false,
}: TreeProps) {
  return (
    <div className="overflow-auto">
      {data.map((item) => (
        <TreeItem
          key={item.id}
          item={item}
          level={0}
          initialSelectedItemId={initialSelectedItemId}
          onSelectChange={onSelectChange}
          expandAll={expandAll}
        />
      ))}
    </div>
  )
}

type TreeItemProps = {
  item: TreeDataItem
  level: number
  initialSelectedItemId?: string | number
  onSelectChange?: (item: TreeDataItem) => void
  expandAll?: boolean
}

export function TreeItem({
  item,
  level,
  initialSelectedItemId,
  onSelectChange,
  expandAll,
}: TreeItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(expandAll)
  const [isSelected, setIsSelected] = React.useState(
    item.id === initialSelectedItemId
  )

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSelectClick = () => {
    setIsSelected(!isSelected)
    onSelectChange?.(item)
  }

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 px-2 py-1 cursor-pointer text-foreground hover:bg-muted",
          isSelected && "bg-accent text-accent-foreground"
        )}
        style={{ paddingLeft: `${level * 12 + 12}px` }}
        onClick={handleSelectClick}
      >
        {item.children && item.children.length > 0 && (
          <ChevronRight
            onClick={(e) => {
              e.stopPropagation()
              handleExpandClick()
            }}
            className={cn(
              "h-4 w-4 shrink-0 transition-transform text-muted-foreground",
              isExpanded && "rotate-90"
            )}
          />
        )}
        {!item.children?.length && (
          <div className="w-4" />
        )}
        <span className="text-muted-foreground">{item.icon}</span>
        <span className="flex-grow truncate">{item.name}</span>
      </div>

      {isExpanded && item.children && (
        <div>
          {item.children.map((child) => (
            <TreeItem
              key={child.id}
              item={child}
              level={level + 1}
              initialSelectedItemId={initialSelectedItemId}
              onSelectChange={onSelectChange}
              expandAll={expandAll}
            />
          ))}
        </div>
      )}
    </div>
  )
}