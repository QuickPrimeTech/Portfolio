"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, CheckCircle } from "lucide-react";
import { processSteps } from "@/data/process";
import { ProcessStep, Phase } from "@/types";
import { phases } from "@/data/process";

const Steps = () => {
  const [activePhase, setActivePhase] = useState("discovery");
  const safePhases = phases || [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activePhase} onValueChange={setActivePhase}>
            <TabsList className="w-full overflow-hidden mb-12">
              <div className="flex w-full overflow-x-auto no-scrollbar -mx-2 px-2">
                {safePhases.map((phase: Phase) => (
                  <TabsTrigger
                    key={phase.id}
                    value={phase.id}
                    className="flex-shrink-0 px-3 py-2 text-xs"
                  >
                    {phase.name}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>

            {Object.entries(processSteps).map(([phaseId, steps]) => (
              <TabsContent key={phaseId} value={phaseId}>
                <div className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {safePhases.find((p) => p.id === phaseId)?.name ||
                        "Unknown Phase"}
                    </h2>
                    <p className="text-xl text-gray-600">
                      {safePhases.find((p) => p.id === phaseId)?.description ||
                        ""}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {(steps || []).map((step: ProcessStep, index: number) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                              {step.icon && (
                                <step.icon className="h-6 w-6 text-secondary" />
                              )}
                            </div>
                            <div>
                              <CardTitle className="text-lg">
                                {step.title}
                              </CardTitle>
                              <CardDescription className="flex items-center mt-1">
                                <Clock className="h-4 w-4 mr-1" />
                                {step.duration}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            {step.description}
                          </p>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-2">
                              Deliverables:
                            </h4>
                            <ul className="space-y-1">
                              {(step.deliverables || []).map(
                                (deliverable, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center text-sm text-gray-600"
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                                    {deliverable}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Steps;
