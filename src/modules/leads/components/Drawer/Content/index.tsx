import {
	Mail,
	User,
	Star,
	Building,
	TrendingUp,
	DollarSign,
} from "lucide-react";

import { getScoreColor } from "@/modules/leads/utils";

import type { ContentDrawerProps } from "./types";
import { STAGE_OPTIONS, STATUS_COLORS } from "@/shared/constants";

export function ContentDrawer({
	lead,
	form,
	isEditing,
	conversionData,
	setConversionData,
	conversionErrorMessage,
}: ContentDrawerProps) {
	return (
		<div className="flex-1 overflow-y-auto p-6">
			<div className="space-y-6">
				<div className="space-y-4">
					<div className="flex items-center space-x-3">
						<div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
							<User className="h-6 w-6 text-blue-600" />
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-900">{lead.name}</h3>
							<p className="text-sm text-gray-500">Lead ID: {lead.id}</p>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							<Building className="inline h-4 w-4 mr-1" />
							Company
						</label>
						<p className="text-sm text-gray-900">{lead.company}</p>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							<Mail className="inline h-4 w-4 mr-1" />
							Email
						</label>

						{isEditing ? (
							<div>
								<input
									type="email"
									{...form.register("email")}
									className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
										form.formState.errors.email
											? "border-red-300"
											: "border-gray-300"
									}`}
								/>
								{form.formState.errors.email && (
									<p className="mt-1 text-sm text-red-600">
										{form.formState.errors.email.message}
									</p>
								)}
							</div>
						) : (
							<p className="text-sm text-gray-900">{lead.email}</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Source
						</label>
						<p className="text-sm text-gray-900">{lead.source}</p>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							<Star className="inline h-4 w-4 mr-1" />
							Score
						</label>
						<div className="flex items-center">
							<Star className={`h-5 w-5 mr-1 ${getScoreColor(lead.score)}`} />
							<span
								className={`text-lg font-semibold ${getScoreColor(lead.score)}`}
							>
								{lead.score}
							</span>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Status
						</label>
						{isEditing ? (
							<div>
								<select
									{...form.register("status")}
									className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
										form.formState.errors.status
											? "border-red-300"
											: "border-gray-300"
									}`}
								>
									<option value="New">New</option>
									<option value="Contacted">Contacted</option>
									<option value="Qualified">Qualified</option>
									<option value="Converted">Converted</option>
								</select>
								{form.formState.errors.status && (
									<p className="mt-1 text-sm text-red-600">
										{form.formState.errors.status.message}
									</p>
								)}
							</div>
						) : (
							<span
								className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
									STATUS_COLORS[lead.status]
								}`}
							>
								{lead.status}
							</span>
						)}
					</div>
				</div>

				{lead.status !== "Converted" && (
					<div className="border-t border-gray-200 pt-6">
						<h4 className="text-md font-medium text-gray-900 mb-4 flex items-center">
							<TrendingUp className="h-4 w-4 mr-2" />
							Convert to Opportunity
						</h4>

						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Stage
								</label>
								<select
									value={conversionData.stage}
									onChange={(e) =>
										setConversionData({
											...conversionData,
											stage: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								>
									{STAGE_OPTIONS.map((stage) => (
										<option key={stage} value={stage}>
											{stage}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									<DollarSign className="inline h-4 w-4 mr-1" />
									Amount (Optional)
								</label>
								<input
									type="number"
									placeholder="Enter amount..."
									value={conversionData.amount}
									onChange={(e) =>
										setConversionData({
											...conversionData,
											amount: parseFloat(e.target.value),
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>

							{conversionErrorMessage && (
								<p className="text-sm text-red-600">{conversionErrorMessage}</p>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
