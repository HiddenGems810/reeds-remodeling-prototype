"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle2, AlertCircle } from "lucide-react";

// Mock Data
const recentBriefs = [
  { id: "BRF-001", client: "Sarah Jenkins", projectType: "Full Kitchen Remodel", budget: "$40k - $60k", status: "New", date: "2 hours ago" },
  { id: "BRF-002", client: "Mike Donovan", projectType: "Interior Painting (Entire Home)", budget: "$10k - $25k", status: "Reviewed", date: "Yesterday" },
  { id: "BRF-003", client: "Emily Chen", projectType: "Basement Finishing", budget: "$25k - $40k", status: "Scheduled", date: "Oct 12" },
];

const generalInquiries = [
  { id: "INQ-001", name: "David Miller", email: "david.m@example.com", subject: "Quote for exterior trim", date: "1 hour ago" },
  { id: "INQ-002", name: "Lisa Thompson", email: "lisa.t@example.com", subject: "Are you available in November?", date: "3 hours ago" },
  { id: "INQ-003", name: "Robert Wilson", email: "r.wilson99@example.com", subject: "Drywall repair after water damage", date: "Yesterday" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "New":
      return <Badge className="bg-[#d97706]/10 text-[#d97706] hover:bg-[#d97706]/20 border-none shadow-none"><AlertCircle className="w-3 h-3 mr-1" /> New</Badge>;
    case "Reviewed":
      return <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-none shadow-none"><Clock className="w-3 h-3 mr-1" /> Reviewed</Badge>;
    case "Scheduled":
      return <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none shadow-none"><CheckCircle2 className="w-3 h-3 mr-1" /> Scheduled</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-[#0f2420]">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back. Here is the latest activity for Reeds Remodeling.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription className="font-bold uppercase tracking-widest text-[10px]">New Project Briefs</CardDescription>
            <CardTitle className="text-4xl font-display text-[#0f2420]">12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs font-medium text-green-600 bg-green-50 inline-flex px-2 py-1 rounded-md">+3 this week</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription className="font-bold uppercase tracking-widest text-[10px]">Active Inquiries</CardDescription>
            <CardTitle className="text-4xl font-display text-[#0f2420]">5</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs font-medium text-muted-foreground bg-gray-50 inline-flex px-2 py-1 rounded-md">Needs attention</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-gradient-to-br from-[#0f2420] to-[#1a3632] text-white rounded-2xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription className="font-bold uppercase tracking-widest text-[10px] text-white/60">Estimated Pipeline</CardDescription>
            <CardTitle className="text-4xl font-display text-white">$145k</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs font-medium text-[#d97706] bg-[#d97706]/10 inline-flex px-2 py-1 rounded-md border border-[#d97706]/20">Based on submitted briefs</div>
          </CardContent>
        </Card>
      </div>

      {/* Briefs Section */}
      <div id="briefs" className="scroll-mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold text-[#0f2420]">Recent Project Briefs</h2>
          <button className="text-sm font-bold text-[#d97706] hover:text-[#b46000] flex items-center gap-1 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-gray-50 text-gray-500 font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Project Type</th>
                  <th className="px-6 py-4">Budget Range</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentBriefs.map((brief) => (
                  <tr key={brief.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
                    <td className="px-6 py-4 font-medium text-gray-900">{brief.client}</td>
                    <td className="px-6 py-4 text-gray-600">{brief.projectType}</td>
                    <td className="px-6 py-4 text-gray-600">{brief.budget}</td>
                    <td className="px-6 py-4">{getStatusBadge(brief.status)}</td>
                    <td className="px-6 py-4 text-right text-gray-400 text-xs flex items-center justify-end gap-3">
                      {brief.date}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#d97706]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Inquiries Section */}
      <div id="inquiries" className="scroll-mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold text-[#0f2420]">General Inquiries</h2>
          <button className="text-sm font-bold text-[#d97706] hover:text-[#b46000] flex items-center gap-1 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {generalInquiries.map((inq) => (
            <Card key={inq.id} className="border border-gray-100 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-1">
                  <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider text-gray-500 border-gray-200">Contact Form</Badge>
                  <span className="text-xs text-gray-400 font-medium">{inq.date}</span>
                </div>
                <CardTitle className="text-base text-[#0f2420]">{inq.name}</CardTitle>
                <CardDescription className="text-xs truncate">{inq.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-medium leading-relaxed line-clamp-2">"{inq.subject}"</p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center text-xs font-bold text-[#d97706] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Read message <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
