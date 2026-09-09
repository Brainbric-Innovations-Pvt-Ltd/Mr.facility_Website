"use client";

import React from "react";
import {
  CheckSquare,
  Clock3,
  UserRound,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

export default function TaskManagement() {
  const columns = [
    {
      title: "To Do",
      count: 2,
      icon: ClipboardCheck,
      accent: "bg-slate-400",
      tasks: [
        {
          id: "TSK-301",
          title: "Perimeter CCTV Camera 14 Alignment",
          assignee: "Carlos Sanchez",
          priority: "High",
          dueDate: "Today, 4 PM",
        },
        {
          id: "TSK-302",
          title: "Conference Room Deep Sanitization",
          assignee: "Elena Rostova",
          priority: "Medium",
          dueDate: "Tomorrow, 9 AM",
        },
      ],
    },
    {
      title: "In Progress",
      count: 2,
      icon: Clock3,
      accent: "bg-[#151B6B]",
      tasks: [
        {
          id: "TSK-201",
          title: "HVAC Zone 4 Filter Replacement",
          assignee: "Devon Reed",
          priority: "Urgent",
          dueDate: "In 2 hrs",
        },
        {
          id: "TSK-202",
          title: "Turnstile 3 Sensor Calibration",
          assignee: "Marcus Vance",
          priority: "High",
          dueDate: "In 3 hrs",
        },
      ],
    },
    {
      title: "Completed",
      count: 2,
      icon: CheckCircle2,
      accent: "bg-[#00A651]",
      tasks: [
        {
          id: "TSK-101",
          title: "Boardroom Morning Setup",
          assignee: "Elena Rostova",
          priority: "Medium",
          dueDate: "Completed",
        },
        {
          id: "TSK-102",
          title: "Generator 30-Min Load Test",
          assignee: "Devon Reed",
          priority: "High",
          dueDate: "Completed",
        },
      ],
    },
  ];

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "High":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <section
      id="task-management"
      className="py-20 md:py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
            Task Management
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#151B6B]">
            From Work Order to Completion
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Create, assign, prioritize, and monitor facility work orders with
            clear ownership and real-time progress.
          </p>
        </div>

        {/* Task Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">
                Total Tasks
              </p>

              <CheckSquare className="w-4 h-4 text-[#151B6B]" />
            </div>

            <p className="mt-3 text-2xl font-black text-slate-900">
              06
            </p>

            <p className="mt-1 text-[11px] text-slate-500">
              Across active sites
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">
                In Progress
              </p>

              <Clock3 className="w-4 h-4 text-[#151B6B]" />
            </div>

            <p className="mt-3 text-2xl font-black text-slate-900">
              02
            </p>

            <p className="mt-1 text-[11px] text-slate-500">
              Currently being handled
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">
                Completed
              </p>

              <CheckCircle2 className="w-4 h-4 text-[#00A651]" />
            </div>

            <p className="mt-3 text-2xl font-black text-[#00A651]">
              02
            </p>

            <p className="mt-1 text-[11px] text-slate-500">
              Successfully verified
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">
                Attention Needed
              </p>

              <AlertCircle className="w-4 h-4 text-amber-500" />
            </div>

            <p className="mt-3 text-2xl font-black text-slate-900">
              01
            </p>

            <p className="mt-1 text-[11px] text-slate-500">
              High-priority task
            </p>
          </div>

        </div>

        {/* Workflow Board */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-6">

          {/* Board Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#151B6B]/10 text-[#151B6B] flex items-center justify-center">
                  <ClipboardCheck className="w-4 h-4" />
                </div>

                <h3 className="font-bold text-slate-900">
                  Work Order Board
                </h3>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                Track every task through its operational lifecycle.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#00A651]" />
              Live workflow
            </div>

          </div>

          {/* Progress Flow */}
          <div className="hidden md:flex items-center gap-3 mb-6 px-2">

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">
                01
              </span>
              Assigned
            </div>

            <ArrowRight className="w-4 h-4 text-slate-300" />

            <div className="flex items-center gap-2 text-xs font-semibold text-[#151B6B]">
              <span className="w-6 h-6 rounded-full bg-[#151B6B] text-white flex items-center justify-center text-[10px]">
                02
              </span>
              In Progress
            </div>

            <ArrowRight className="w-4 h-4 text-slate-300" />

            <div className="flex items-center gap-2 text-xs font-semibold text-[#00A651]">
              <span className="w-6 h-6 rounded-full bg-[#00A651] text-white flex items-center justify-center text-[10px]">
                03
              </span>
              Verified
            </div>

          </div>

          {/* Kanban */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {columns.map((column) => {
              const ColumnIcon = column.icon;

              return (
                <div
                  key={column.title}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                >

                  {/* Column Header */}
                  <div className="px-4 py-4 border-b border-slate-100">
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center ${column.title === "Completed"
                              ? "bg-emerald-50 text-[#00A651]"
                              : column.title === "In Progress"
                                ? "bg-[#151B6B]/10 text-[#151B6B]"
                                : "bg-slate-100 text-slate-500"
                            }`}
                        >
                          <ColumnIcon className="w-4 h-4" />
                        </span>

                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {column.title}
                          </h4>

                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {column.count} tasks
                          </p>
                        </div>
                      </div>

                      <span
                        className={`w-2 h-2 rounded-full ${column.accent}`}
                      />
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="p-3 space-y-3">

                    {column.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-[#151B6B]/20 hover:shadow-sm transition-all"
                      >

                        <div className="flex items-center justify-between gap-2 mb-3">

                          <span className="text-[10px] font-mono font-semibold text-slate-400">
                            {task.id}
                          </span>

                          <span
                            className={`text-[10px] font-bold px-2 py-1 rounded-md border ${getPriorityStyle(
                              task.priority
                            )}`}
                          >
                            {task.priority}
                          </span>

                        </div>

                        <h5 className="text-xs sm:text-sm font-bold leading-snug text-slate-900">
                          {task.title}
                        </h5>

                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">

                          <div className="flex items-center gap-2 text-[11px] text-slate-500">
                            <UserRound className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">
                              {task.assignee}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-slate-500">
                            <Clock3 className="w-3.5 h-3.5 shrink-0" />
                            <span
                              className={
                                task.dueDate.includes("Today") ||
                                  task.dueDate.includes("hrs")
                                  ? "font-semibold text-amber-600"
                                  : ""
                              }
                            >
                              {task.dueDate}
                            </span>
                          </div>

                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom Value Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

          <div className="flex items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-white">
            <div className="w-9 h-9 rounded-lg bg-[#151B6B]/10 text-[#151B6B] flex items-center justify-center shrink-0">
              <UserRound className="w-4 h-4" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Clear Ownership
              </h4>

              <p className="text-[11px] text-slate-500 mt-0.5">
                Every task has an assigned owner.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-white">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock3 className="w-4 h-4" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Priority & Deadlines
              </h4>

              <p className="text-[11px] text-slate-500 mt-0.5">
                Keep urgent work visible and on time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-white">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00A651] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Verified Completion
              </h4>

              <p className="text-[11px] text-slate-500 mt-0.5">
                Track work through final completion.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
